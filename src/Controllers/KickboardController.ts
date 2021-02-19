import { Request, Response } from "express";
import KickBoard from "../Entities/KickBoard/KickBoard";
import { errorGenerator, errorWrapper } from "../Errors";
import { kickboardCreateInput } from "../Services/KickboardServices";
import cleanArgs from "../Utils/cleanArgs";

const createKickboard = errorWrapper(
  async (request: Request, response: Response) => {
    const user = request.user;
    const { ...args }: kickboardCreateInput = request.body;

    if ((user.isAdmin = false)) errorGenerator({ statusCode: 401 });
    const notNull = cleanArgs(args);
    await KickBoard.create({
      ...notNull,
    }).save();
    response.status(201).json({
      message: "SUCCESS",
    });
  }
);

export default { createKickboard };
