import { Router } from "express";
import {
    CreateOrder,
    GetOrders,
    UpdateOrder,
    DeleteOrder
} from "./orders.controller";
import { authMiddleware } from "../../shared/middlewares/auth.middleware";
import { roleMiddleware } from "../../shared/middlewares/role.middleware";

const router = Router();

router.post("/", CreateOrder);
router.get("/", authMiddleware, roleMiddleware("PRODUCCION"), GetOrders);
router.put("/:id", authMiddleware, roleMiddleware("PRODUCCION"), UpdateOrder);
router.delete("/:id", authMiddleware, roleMiddleware("PRODUCCION"), DeleteOrder);

export default router;

