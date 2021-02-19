import { Request, Response } from "express";
import Users from "../Entities/User/User";
import Verification from "../Entities/Verification/Verification";
import { errorGenerator, errorWrapper } from "../Errors";
import { VerificationInput } from "../Services/UserServices";
import createJWT from "../Utils/createJWT";

const certification = errorWrapper(
  async (request: Request, response: Response) => {
    const { phoneNumber }: VerificationInput = request.body;
    if (!phoneNumber) errorGenerator({ statusCode: 400, message: "KEY_ERROR" });

    await Users.create({
      phoneNumber,
    }).save();

    response.status(201).json({
      message: "SUCCESS",
      phoneNumber,
    });
  }
);

const signIn = errorWrapper(async (request: Request, response: Response) => {
  const { phoneNumber, key }: VerificationInput = request.body;
  const verification = await Verification.findOne({
    payload: phoneNumber,
    key,
  });
  if (!verification) errorGenerator({ statusCode: 401 });
  const user = await Users.findOne({
    phoneNumber,
  });
  verification.verified = true;
  verification.save();
  const token = createJWT(user.id);
  response.status(200).json({
    message: "Success",
    token,
  });
});
/* 프론트 연결후 변경 
const certification = errorWrapper(
  async (request: Request, response: Response) => {
    const { imp_uid } = request.body;
    if (!imp_uid) errorGenerator({ statusCode: 400 });
    const getToken = await axios({
      url: "https://api.iamport.kr/users/getToken",
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: {
        imp_key: process.env.IMP_API_KEY,
        imp_secret: process.env.IMP_SECRET,
      },
    });

    const { access_token } = getToken.data.response;

    const getCertifications = await axios({
      url: `https://api.iamport.kr/certifications/${imp_uid}`,
      method: "get",
      headers: {
        Authorization: access_token,
      },
    });

    const certificationInfo = getCertifications.data.response;
  }
);
*/

export default { certification, signIn };
