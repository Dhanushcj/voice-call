const twilio = require('twilio');

const VoiceResponse = twilio.twiml.VoiceResponse;
const response = new VoiceResponse();

try {
  response.say({ 
    voice: 'Polly.Aditi', 
    language: 'en-IN' 
  }, "Hello! This is Antigraviity AI. Please wait while I connect your call.");

  const dial = response.dial({ 
    callerId: '+19783818471',
    answerOnBridge: true 
  });
  dial.number('+919444667411');

  console.log("Generated TwiML:\n", response.toString());
} catch (err) {
  console.error("Crash during TwiML generation:", err);
}
