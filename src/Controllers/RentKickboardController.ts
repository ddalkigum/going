import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import KickBoard from '../Entities/kickBoard/KickBoard';
import Ride from '../Entities/ride/Ride';
import Users from '../Entities/user/User';
import { errorGenerator, errorWrapper } from '../Errors';

const rentKickboard = errorWrapper(
  async (request: Request, response: Response) => {
    const user = request.user;
    const { kickboardId } = request.params;
    const kickboard = await KickBoard.findOne({ id: parseInt(kickboardId) });

    if (kickboard.isRiding)
      errorGenerator({ statusCode: 400, message: 'ALREADY_RIDING' });

    await Ride.create({
      userId: user.id,
      kickboardId: kickboard.id,
      isRiding: true,
    }).save();

    response.status(200).json({
      message: 'SUCCESS',
    });
  },
);

export default { rentKickboard };
