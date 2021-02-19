import { Router } from "express";
import UserRouter from "./UserRoute";

const router = Router();

router.use("/users", UserRouter);

export default router;
