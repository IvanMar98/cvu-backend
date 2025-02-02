import express from "express";
import { createPais, deletePaisById, getPaises, getPaisesByID, updatePaisById } from "../controllers/paisController.js";

import { verifyToken } from "../middleware/verifyTokenMiddleware.js";
const router = express.Router();

router.post('/', createPais);
router.get('/', verifyToken, getPaises);
router.get('/:id_pais', getPaisesByID);
router.put('/:id_pais', updatePaisById);
router.delete('/:id_pais', deletePaisById);

export default router;