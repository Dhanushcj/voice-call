const express = require('express');
const cors = require('cors');
const axios = require('axios');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// START GLOBAL LOGGING FIRST - BEFORE ANY BODY PARSING
app.use((req, res, next) => {
  console.log(`📡 [TRAFFIC] ${req.method} ${req.path} | IP: ${req.ip} | User-Agent: ${req.get('user-agent')}`);
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mock Data
const stats = {
  totalCalls: '12,842',
  avgResolution: '1.4m',
  csat: '4.8/5',
  activeAgents: '42'
};

const calls = [
  { agent: 'Agent Delta', customer: '+91 98*** 1234', status: 'In-progress', sentiment: 'Positive' },
  { agent: 'Agent Sigma', customer: '+1 (555) 0123', status: 'Completed', sentiment: 'Neutral' },
  { agent: 'Agent Alpha', customer: '+44 20 7*** 000', status: 'Transcribing', sentiment: 'Positive' }
];

// Routes
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // Demo Credentials
  if (email === 'admin@antigraviity.ai' && password === 'password123') {
    res.json({ success: true, user: { name: 'Admin', email } });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.get('/api/stats', (req, res) => {
  res.json(stats);
});

app.get('/api/calls', (req, res) => {
  res.json(calls);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

// Twilio Integration
const ClientCapability = twilio.jwt.ClientCapability;
const AccessToken = twilio.jwt.AccessToken;
const VoiceGrant = AccessToken.VoiceGrant;

app.get('/api/twilio/token', (req, res) => {
  const { 
    TWILIO_ACCOUNT_SID, 
    TWILIO_API_KEY_SID, 
    TWILIO_API_SECRET,
    TWILIO_TWIML_APP_SID 
  } = process.env;

  if (!TWILIO_ACCOUNT_SID || !TWILIO_API_KEY_SID || !TWILIO_API_SECRET) {
    return res.status(500).json({ error: 'Twilio credentials missing in .env' });
  }

  const identity = 'agent_admin';
  const accessToken = new AccessToken(
    TWILIO_ACCOUNT_SID,
    TWILIO_API_KEY_SID,
    TWILIO_API_SECRET,
    { identity: identity, ttl: 3600 }
  );

  const grant = new VoiceGrant({
    outgoingApplicationSid: TWILIO_TWIML_APP_SID,
    incomingAllow: true,
  });
  accessToken.addGrant(grant);

  res.json({
    success: true,
    token: accessToken.toJwt(),
    identity: identity
  });
});

// TwiML Webhook for Outgoing Calls - Support both GET and POST
app.all('/api/voice/outgoing', (req, res) => {
  const requestId = Math.random().toString(36).substring(7);
  console.log(`[${requestId}] --- WEBHOOK START (${req.method}) ---`);
  
  // Resilient Body Parsing (Check both body and query)
  const payload = { ...req.query, ...req.body };
  console.log(`[${requestId}] Payload:`, JSON.stringify(payload));
  
  try {
    const VoiceResponse = twilio.twiml.VoiceResponse;
    const response = new VoiceResponse();
    
    // Check multiple possible locations for the 'To' number
    const To = payload.To || payload.Called || payload.ToCountry;

    if (To && To.length > 5 && To !== process.env.TWILIO_CALLER_ID) {
      console.log(`[${requestId}] 🚀 DIALING: ${To} | FROM: ${process.env.TWILIO_CALLER_ID}`);
      
      const dial = response.dial({ 
        callerId: process.env.TWILIO_CALLER_ID,
        timeout: 30,
        record: 'record-from-answer' // Optional: helpful for debugging audio issues later
      });
      console.log(`[${requestId}] ☎️  Laying Bridge for Human-to-Human connection.`);
      const publicBaseUrl = 'https://2bc10d393baa2e.lhr.life'; 
      dial.number({
        statusCallbackEvent: 'initiated ringing answered completed',
        statusCallback: `${publicBaseUrl}/api/voice/status`
      }, To);
    } else {
      console.log(`[${requestId}] ℹ️ No destination. Keys:`, Object.keys(payload));
      response.say({ voice: 'Polly.Amy' }, "Your connection is active, but the destination is missing.");
    }

    res.type('text/xml');
    res.send(response.toString());
    console.log(`[${requestId}] --- WEBHOOK END (XML SENT) ---`);
  } catch (err) {
    console.error(`[${requestId}] ❌ WEBHOOK CRASH:`, err);
    res.type('text/xml');
    res.send('<?xml version="1.0" encoding="UTF-8"?><Response><Say>Connection issue.</Say></Response>');
  }
});

// Status Callback for Monitoring Call Health
app.post('/api/voice/status', (req, res) => {
  const { CallStatus, To, CallSid } = req.body;
  console.log(`[EVENT] Call ${CallSid} to ${To} is now: ${CallStatus.toUpperCase()}`);
  res.status(204).end();
});

// Direct Health Check for Webhook Verification
app.get('/api/voice/health', (req, res) => {
  res.json({ status: 'Online', service: 'Twilio Webhook Interface', timestamp: new Date() });
});

// Proxy to Python Backend for reports
app.post('/api/generate-report', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:8000/generate-report', req.body, { timeout: 5000 });
    res.json(response.data);
  } catch (error) {
    console.error('Python service error:', error);
    res.status(500).json({ error: 'Failed to connect to Python NLP engine' });
  }
});

// Dumb Responder - Minimal TwiML to bypass all logic
app.all('/api/voice/test', (req, res) => {
  console.log("🛠️  [DIAGNOSTIC] TEST ROUTE HIT!");
  res.type('text/xml');
  res.send('<?xml version="1.0" encoding="UTF-8"?><Response><Say>Connection Test Successful.</Say></Response>');
});

app.listen(PORT, () => {
  console.log(`Node.js Backend running on http://localhost:${PORT}`);
});
