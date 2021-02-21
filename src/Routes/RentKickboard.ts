import { Router } from 'express';
import RentKickboardController from '../Controllers/RentKickboardController';
import validateToken from '../Middlewares/validateJWT';

const router = Router();

router.post(
  '/:kickboardId',
  validateToken,
  RentKickboardController.rentKickboard,
);

export default router;
