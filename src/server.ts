import dotenv from "dotenv";
dotenv.config();
import { createServer, Server } from "http";
import { createConnection } from "typeorm";
import connectionOptions from "./ormConfig";
import app from "./app";
import "reflect-metadata";

const PORT = process.env.PORT;

const server: Server = createServer(app);

const start = async () => {
  try {
    await createConnection(connectionOptions).then(() => {
      console.log("DB Connection Success");
    }),
      server.listen(PORT, () =>
        console.log(`Server start on http://127.0.0.1:${PORT}`)
      );
  } catch (error) {
    console.log(error);
  }
};
start();
