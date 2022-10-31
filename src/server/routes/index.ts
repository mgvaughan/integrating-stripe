import * as express from 'express';
import chirpsRouter from './chirps';
import usersRouter from './users'
import donateRouter from './donate'

const router = express.Router();

router.use('/api/chirps', chirpsRouter);
router.use('/api/users', usersRouter);
router.use('/api/donate', donateRouter);

export default router;