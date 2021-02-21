import { Request, Response } from 'express';
import { Between, getRepository } from 'typeorm';
import KickBoard from '../Entities/kickBoard/KickBoard';
import { errorGenerator, errorWrapper } from '../Errors';
import KickboardServices, {
  kickboardCreateInput,
  kickboardUpdateInput,
} from '../Services/KickboardServices';

const createKickboard = errorWrapper(
  async (request: Request, response: Response) => {
    const user = request.user;
    const { ...args }: kickboardCreateInput = request.body;

    if ((user.isAdmin = false)) errorGenerator({ statusCode: 401 });
    await KickboardServices.kickboardCreateService(args);
    response.status(201).json({
      message: 'SUCCESS',
    });
  },
);

const getNearByKickBoard = errorWrapper(
  async (request: Request, response: Response) => {
    const user = request.user;
    const kickboards = await KickboardServices.findKickboardService(user);

    response.status(200).json({
      kickboards,
    });
  },
);

const updateKickboard = errorWrapper(
  async (request: Request, response: Response) => {
    const user = request.user;
    if (!user.isAdmin) errorGenerator({ statusCode: 403 });

    const { kickboardId } = request.params;
    const { ...args }: kickboardUpdateInput = request.body;

    await KickboardServices.kickboardUpdateService(args, parseInt(kickboardId));
    response.status(200).json({
      message: 'SUCCESS',
    });
  },
);

export default { createKickboard, getNearByKickBoard, updateKickboard };
