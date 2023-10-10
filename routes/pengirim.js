import  express from 'express';
import { pengirim, Post } from "../controller/pengirim.js";

const router = express.Router();
router.get('/',pengirim);
router.post('/new_pengirim',Post);

export default router;