import express from 'express';
import { hireMe } from '../controllers/userController.js';
const userRouter = express.Router();



userRouter.post('/hireme', hireMe);

export default userRouter;