const twilio = require('twilio');

const VoiceResponse = twilio.twiml.VoiceResponse;
const response = new VoiceResponse();

try {
  const dial = response.dial({ 
    callerId: '+19783818471'
  });
  dial.number('+919444667411');

  console.log("Generated TwiML:\n", response.toString());
} catch (err) {
  console.error("Crash during TwiML generation:", err);
}
