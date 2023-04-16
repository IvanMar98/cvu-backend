import express from "express";
import { createPais, deletePaisById, getPaises, getPaisesByID, updatePaisById } from "../controllers/paisController.js";

const router = express.Router();

router.post('/', createPais);
router.get('/', getPaises);
router.get('/:id_pais', getPaisesByID);
router.put('/:id_pais', updatePaisById);
router.delete('/:id_pais', deletePaisById);

export default router;