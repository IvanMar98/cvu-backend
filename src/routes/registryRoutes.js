import express from "express";

import { createNewRegistry } from "../controllers/registryController.js";

const router = express.Router();

router.post('/', createNewRegistry);

export default router;