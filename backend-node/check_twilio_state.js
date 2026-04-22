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
  console.log("Checking Twilio App:", TWILIO_TWIML_APP_SID);

  try {
    const app = await client.applications(TWILIO_TWIML_APP_SID).fetch();
    console.log("--- TWILIO CONSOLE STATE ---");
    console.log("Voice URL:", app.voiceUrl);
    console.log("Voice Method:", app.voiceMethod);
    console.log("----------------------------");
  } catch (err) {
    console.error("❌ FETCH FAILED:", err.message);
  }
}

checkApp();
