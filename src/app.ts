import express, { Application, NextFunction, Request } from 'express';
import logger from 'morgan';
import cors from 'cors';
import { generalErrorHandler } from './Errors';
import Routes from './Routes';

const app: Application = express();

app.use(express.json());
app.options('*', cors());
app.use(logger('dev'));
app.use(Routes);
app.use(generalErrorHandler);

export default app;
