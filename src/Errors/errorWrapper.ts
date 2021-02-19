import { NextFunction, RequestHandler, Request, Response } from "express";

const errorWrapper = (controller: RequestHandler) => async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    await controller(request, response, next);
  } catch (error) {
    next(error);
  }
};

export default errorWrapper;
