import Twilio from "twilio";

const twilioClient = Twilio(process.env.SID, process.env.TOKEN);

const sendSMS = (to: string, body: string) => {
  return twilioClient.messages.create({
    to,
    body,
    from: process.env.PHONE_NUMBER,
  });
};

export const sendMessage = (to: string, key: string) => {
  console.log(to, key);
  sendSMS(to, `인증번호는 [${key}]입니다 `);
};
