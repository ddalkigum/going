import { Router } from "express";
import UserController from "../Controllers/userController";

const router = Router();

router.post("/signup", UserController.certification);
router.post("signin", UserController.signIn);

export default router;
