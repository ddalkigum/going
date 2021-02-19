import express from "express";
import logger from "morgan";
import cors from "cors";
import { generalErrorHandler } from "./Errors";
import Routes from "./Routes";

class App {
  public app = express();

  constructor() {
    this.middlewares();
  }

  private middlewares = (): void => {
    this.app.use(express.json());
    this.app.options("*", cors());
    this.app.use(logger("dev"));
    this.app.use(Routes);
    this.app.use(generalErrorHandler);
  };
}

export default new App().app;
