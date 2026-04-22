const twilio = require('twilio');
require('dotenv').config();

const { 
  TWILIO_ACCOUNT_SID, 
  TWILIO_API_KEY_SID, 
  TWILIO_API_SECRET 
} = process.env;

const client = twilio(TWILIO_API_KEY_SID, TWILIO_API_SECRET, { accountSid: TWILIO_ACCOUNT_SID });

async function createTwiMLApp() {
  try {
    console.log("Using API Key SID:", TWILIO_API_KEY_SID);
    console.log("Using Account SID:", TWILIO_ACCOUNT_SID);
    
    const app = await client.applications.create({
      friendlyName: 'Antigraviity Twilio Global',
      voiceUrl: 'http://localhost:5000/api/voice/outgoing', // Note: Needs ngrok later
      voiceMethod: 'POST'
    });
    
    console.log("--- SUCCESS! ---");
    console.log("TwiML App SID (AP...):", app.sid);
    console.log("---");
  } catch (err) {
    console.error("Critical Error Creating TwiML App:", err.message);
    if (err.code === 20003) {
      console.log("Tip: This error usually means the API Key or Secret has a typo, or hasn't propagated yet.");
    }
  }
}

createTwiMLApp();
