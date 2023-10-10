import express from 'express';
import cors from 'cors';

import { publicRouter } from '../route/public-api.js';
import { errorMiddleware } from '../middleware/error-middleware.js';


export const app = express();

app.use(cors());
app.use(express.json());
app.use(publicRouter);
app.use(errorMiddleware);
