import { Router } from "express";
import {
    createProduction,
    updateProduction,
    deleteProduction
} from "./production.controller";
import { authMiddleware } from "../../shared/middlewares/auth.middleware";
import { roleMiddleware } from "../../shared/middlewares/role.middleware";

const router = Router()

router.post("/", authMiddleware, roleMiddleware("PRODUCCION"),createProduction)
router.put("/:id", authMiddleware, roleMiddleware("PRODUCCION"), updateProduction)
router.delete("/:id", authMiddleware, roleMiddleware("PRODUCCION"), deleteProduction)

export default router;