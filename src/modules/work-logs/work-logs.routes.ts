import { Router } from "express";
import { 
    createWorkLog,
    updateWorLog,
    getAllWorkLogs,
    deleteWorkLog
 } from "./work-logs.controller";
 import { authMiddleware } from "../../shared/middlewares/auth.middleware";
 import { roleMiddleware } from "../../shared/middlewares/role.middleware";

 const router = Router();

 router.post("/", authMiddleware, roleMiddleware("PRODUCCION"), createWorkLog);
 router.put("/:id", authMiddleware, roleMiddleware("PRODUCCION"), updateWorLog);
 router.get("/", authMiddleware, roleMiddleware("PRODUCCION"), getAllWorkLogs);
 router.delete("/:id", authMiddleware, roleMiddleware("PRODUCCION"), deleteWorkLog);

 export default router;