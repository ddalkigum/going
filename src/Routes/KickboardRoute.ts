import { Router } from 'express';
import KickboardController from '../Controllers/KickboardController';
import validateToken from '../Middlewares/validateJWT';

const router = Router();

router.get('', validateToken, KickboardController.getNearByKickBoard);
router.post(
  '/:kickboardId',
  validateToken,
  KickboardController.createKickboard,
);
router.patch(
  '/:kickboardId',
  validateToken,
  KickboardController.updateKickboard,
);

export default router;
