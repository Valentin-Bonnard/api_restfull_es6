import express from 'express';
import authCtrl from '../controllers/auth';

const router = express.Router();

router.route('/token')
    /** POST /api/auth/token Get JWT authentification token */

    .post(authCtrl.authenticate,
    authCtrl.generateToken,
    authCtrl.responseJwt);

export default router;