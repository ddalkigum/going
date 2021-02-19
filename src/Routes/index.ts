import { Router } from "express";
import UserRoute from "./UserRoute";
import KickboardRoute from "./KickboardRoute";

const router = Router();

router.use("/users", UserRoute);
router.use("/kickboard", KickboardRoute);

export default router;
