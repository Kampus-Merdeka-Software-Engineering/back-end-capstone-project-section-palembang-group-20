import express from 'express';

import userController from '../controller/user-controller.js';

const userRouter = new express.Router();

userRouter.post('/', userController.register);
userRouter.post('/login', userController.login);

export { userRouter };