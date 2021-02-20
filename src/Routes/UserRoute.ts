import { Router } from 'express';
import UserController from '../Controllers/userController';
import Verification from '../Controllers/Verification';

const router = Router();

router.post('/signup', UserController.certification);
router.post('/signin', UserController.signIn);
router.post('/verification', Verification.phoneVerification);

export default router;
