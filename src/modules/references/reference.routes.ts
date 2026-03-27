import { Router } from "express";
import {
    createReference,
    getAllReferences,
    updateReference,
    deleteReference,
    activeReference
} from "./reference.controller"
import { authMiddleware } from "../../shared/middlewares/auth.middleware";
import { roleMiddleware } from "../../shared/middlewares/role.middleware";


const router = Router()

router.post("/", authMiddleware, roleMiddleware("PRODUCCION"),createReference)
router.get("/", authMiddleware, roleMiddleware("PRODUCCION"), getAllReferences)
router.put("/:id", authMiddleware, roleMiddleware("PRODUCCION"),updateReference)
router.delete("/:id", authMiddleware, roleMiddleware("PRODUCCION"),deleteReference)
router.put("/:id/activate", authMiddleware, roleMiddleware("PRODUCCION"),activeReference)


export default router;