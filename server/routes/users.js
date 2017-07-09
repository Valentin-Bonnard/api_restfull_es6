import express from 'express';
import userCtrl from '../controllers/users';
import auth from '../../config/jwt';

const router = express.Router();

router.route('/')
    /** GET /api/users - Get List of users */
    .get(auth, userCtrl.list)

    /** POST /api/users - Create a new users */
    .post(userCtrl.create);


router.route('/:userId')
    /** GET /api/users/:userId - Get user */
    .get(auth, userCtrl.get)

    /** PUT /api/users/:userId - Update user */
    .put(auth, userCtrl.update)

    /** DELETE /api/users/:userId - Delete user */
    .delete(auth, userCtrl.remove);

router.param('userId', userCtrl.load);

export default router;
