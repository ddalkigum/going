import dotenv from 'dotenv';
dotenv.config();
import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  host: process.env.HOST,
  port: 3306,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.NAME,
  synchronize: true,
  entities: ['Entities/**/*.*'],
};

export default connectionOptions;
