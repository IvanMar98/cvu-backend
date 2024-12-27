import express from "express";

import { uploadImageProfile } from "../controllers/imageProfileController.js";
import { verifyToken } from "../middleware/verifyTokenMiddleware.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post('/', verifyToken , upload.single('imageProfile'), uploadImageProfile);
export default router;