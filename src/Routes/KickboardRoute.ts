import { Router } from "express";
import KickboardController from "../Controllers/KickboardController";
import validateToken from "../Middlewares/validateJWT";

const router = Router();

router.post("", validateToken, KickboardController.createKickboard);

export default router;
