import { Router } from 'express';
import UserRoute from './UserRoute';
import KickboardRoute from './KickboardRoute';
import RentKickboard from './RentKickboard';

const router = Router();

router.use('/users', UserRoute);
router.use('/kickboard', KickboardRoute);
router.use('/rent', RentKickboard);

export default router;
