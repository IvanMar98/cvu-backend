import express from "express";

import { createNewUser } from "../controllers/usersController.js";

const router = express.Router();

router.post('/', createNewUser);

export default router;