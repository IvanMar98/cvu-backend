import express from "express";

import { verifyToken } from "../middleware/verifyTokenMiddleware.js";
import { createNewUser, getInfoUser } from "../controllers/usersController.js";

const router = express.Router();

router.post('/', createNewUser);
router.get('/:user_id', verifyToken, getInfoUser);
export default router;