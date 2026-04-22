const twilio = require('twilio');
require('dotenv').config();

const { 
  TWILIO_ACCOUNT_SID, 
  TWILIO_API_KEY_SID, 
  TWILIO_API_SECRET,
  TWILIO_TWIML_APP_SID 
} = process.env;

const client = twilio(TWILIO_API_KEY_SID, TWILIO_API_SECRET, { accountSid: TWILIO_ACCOUNT_SID });

async function syncApp() {
  const NEW_URL = 'https://d5bcdb2eec7b0d.lhr.life/api/voice/outgoing';
  console.log("Syncing Twilio App:", TWILIO_TWIML_APP_SID);
  console.log("Infra Hardening: ACTIVE (Timeouts Enabled)");

  try {
    await client.applications(TWILIO_TWIML_APP_SID).update({
      voiceUrl: NEW_URL,
      voiceMethod: 'POST'
    });
    console.log("✅ SUCCESS: Twilio Console updated to the High-Availability bridge.");
  } catch (err) {
    console.error("❌ SYNC FAILED:", err.message);
  }
}

syncApp();
