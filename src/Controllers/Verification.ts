import { NextFunction, Request, Response } from 'express';
import { errorGenerator } from '../Errors';
import errorWrapper from '../Errors/errorWrapper';
import UserServices, { VerificationInput } from '../Services/UserServices';
import { sendMessage } from '../utils/sendSMS';

const phoneVerification = errorWrapper(
  async (request: Request, response: Response, next: NextFunction) => {
    const { phoneNumber }: VerificationInput = request.body;
    if (!phoneNumber) errorGenerator({ statusCode: 400, message: 'KEY_ERROR' });

    const oldVerification = await UserServices.findVerification(request.body);
    if (oldVerification) {
      oldVerification.remove();
    }
    const newVerification = await UserServices.createVerification(request.body);

    const SMSPhoneNumber = `+82${phoneNumber.slice(1)}`;
    await sendMessage(SMSPhoneNumber, newVerification.key);
    response.status(200).json({
      message: 'Success',
    });
  },
);

export default { phoneVerification };
