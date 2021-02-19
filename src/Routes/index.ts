import { Router } from "express";
import UserRoute from "./UserRoute";

const router = Router();

router.use("/users", UserRoute);

export default router;
