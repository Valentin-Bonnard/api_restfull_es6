import express from 'express';
import userRoutes from './users';
import taskRoutes from './tasks';
import authRoutes from './auth';

const router = express.Router();

/** GET /api-status - Check api status */

router.get('/api-status', (request, response) => {
    response.json({
        status: 'Ok'
    })
});

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);
router.use('/auth', authRoutes);

export default router;