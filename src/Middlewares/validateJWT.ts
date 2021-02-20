import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Users from '../Entities/user/User';
import { errorGenerator, errorWrapper } from '../Errors';

declare global {
  module Express {
    export interface Request {
      user: Users;
    }
  }
}

const validateToken = errorWrapper(
  async (request: Request, response: Response, next: NextFunction) => {
    const { authorization } = request.headers;
    const id = jwt.verify(authorization, process.env.SECRET_JWT)['id'];
    const user = await Users.findOne({ id });
    if (!user) errorGenerator({ statusCode: 400 });
    request.user = user;
    next();
  },
);

export default validateToken;
