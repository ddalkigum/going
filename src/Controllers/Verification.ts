import { Request, Response } from "express";
import Verification from "../Entities/Verification/Verification";
import { errorGenerator } from "../Errors";
import errorWrapper from "../Errors/errorWrapper";
import { sendMessage } from "../utils/sendSMS";

const phoneVerification = errorWrapper(
  async (request: Request, response: Response) => {
    const { phoneNumber } = request.body;
    if (!phoneNumber) errorGenerator({ statusCode: 400 });
    const oldVerification = await Verification.findOne({
      payload: phoneNumber,
    });
    if (oldVerification) {
      oldVerification.remove();
    }
    const newVerification = await Verification.create({
      payload: phoneNumber,
    }).save();

    const SMSPhoneNumber = `+82${phoneNumber.slice(1)}`;
    await sendMessage(SMSPhoneNumber, newVerification.key);
    response.status(200).json({
      message: "Success",
    });
  }
);

export default { phoneVerification };
