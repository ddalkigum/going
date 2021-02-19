import { Router } from "express";
import Verification from "../Controllers/Verification";

const router = Router();

router.post("/verification", Verification.phoneVerification);

export default router;
