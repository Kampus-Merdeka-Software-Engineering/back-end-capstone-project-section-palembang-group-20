import express from 'express';

import { userRouter } from './user-routes.js';

const publicRouter = new express.Router();

publicRouter.use('/api/auth', userRouter);

export { publicRouter };