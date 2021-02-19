import express from "express";
import logger from "morgan";
import cors from "cors";

class App {
  public app = express();

  constructor() {
    this.middlewares;
  }

  private middlewares = (): void => {
    this.app.use(express.json());
    this.app.options("*", cors());
    this.app.use(logger("dev"));
  };
}

export default new App().app;
