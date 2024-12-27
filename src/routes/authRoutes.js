import express from 'express'
import { verifyAuth } from '../middleware/verifyAuthMiddleware.js';

const router = express.Router();

router.get('/', verifyAuth);

export default router;