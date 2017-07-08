import express from 'express';

const router = express.Router();

/** GET /api-status - Check api status */

router.get('/api-status', (request, response) => {
    response.json({
        status: 'Ok'
    })
});

export default router;