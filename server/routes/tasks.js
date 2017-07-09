import express from 'express';
import validate from 'express-validation';
import taskCtrl from '../controllers/tasks';
import validations from './validation/task';

const router = express.Router();

router.route('/')
    /** GET /api/tasks - Get List of tasks */
    .get(taskCtrl.list)

    /** POST /api/tasks - Create a new tasks */
    .post(validate(validations.createTask), taskCtrl.create);


router.route('/:userId')
    /** GET /api/tasks/:userId - Get task */
    .get(taskCtrl.get)

    /** PUT /api/tasks/:userId - Update task */
    .put(validate(validations.updateTask), taskCtrl.update)

    /** DELETE /api/tasks/:userId - Delete task */
    .delete(taskCtrl.remove);


/** Load task when API with taskId route parameter is hit */
router.param('taskId', validate(validations.getTask));
router.param('taskId', taskCtrl.load);

export default router;