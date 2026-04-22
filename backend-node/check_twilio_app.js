const twilio = require('twilio');
require('dotenv').config();

const { 
  TWILIO_ACCOUNT_SID, 
  TWILIO_API_KEY_SID, 
  TWILIO_API_SECRET,
  TWILIO_TWIML_APP_SID 
} = process.env;

const client = twilio(TWILIO_API_KEY_SID, TWILIO_API_SECRET, { accountSid: TWILIO_ACCOUNT_SID });

async function checkApp() {
  console.log("Checking Twilio App SID:", TWILIO_TWIML_APP_SID);
  try {
    const app = await client.applications(TWILIO_TWIML_APP_SID).fetch();
    console.log("--- Current Configuration ---");
    console.log("Friendly Name:", app.friendlyName);
    console.log("Voice URL:", app.voiceUrl);
    console.log("Voice Method:", app.voiceMethod);
    console.log("----------------------------");
    
    const PUBLIC_URL = 'https://97832938f974a8.lhr.life/api/voice/outgoing';
    if (app.voiceUrl !== PUBLIC_URL) {
      console.log("⚠️ WARNING: Your Voice URL is NOT set correctly in Twilio.");
      console.log("Expected:", PUBLIC_URL);
      console.log("Found:   ", app.voiceUrl);
    } else {
      console.log("✅ SUCCESS: Your Voice URL is configured correctly in the Twilio Console.");
    }
  } catch (err) {
    console.error("Error fetching App:", err.message);
  }
}

checkApp();
