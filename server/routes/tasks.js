import express from 'express';
import taskCtrl from '../controllers/tasks';

const router = express.Router();

router.route('/')
    /** GET /api/tasks - Get List of tasks */
    .get(taskCtrl.list)

    /** POST /api/tasks - Create a new tasks */
    .post(taskCtrl.create);


router.route('/:userId')
    /** GET /api/tasks/:userId - Get task */
    .get(taskCtrl.get)

    /** PUT /api/tasks/:userId - Update task */
    .put(taskCtrl.update)

    /** DELETE /api/tasks/:userId - Delete task */
    .delete(taskCtrl.remove);

router.param('userId', userCtrl.load);

export default router;