import express from "express";

import { verifyToken } from "../middleware/verifyTokenMiddleware.js";
import { createNewUser, getInfoUser, getUsers, updateInfoUser } from "../controllers/usersController.js";

const router = express.Router();

router.post('/', createNewUser);
router.get('/:user_id', verifyToken, getInfoUser);
router.get('/', getUsers);
router.put('/:user_id', verifyToken, updateInfoUser);
export default router;