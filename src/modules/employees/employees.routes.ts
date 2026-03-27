import { Router  } from "express";
import{
    createEmployees,
    getAllEmployees,
    updateEmployees,
    delteEmployees,
    activateEmployees
} from "./employees.controller";
import { authMiddleware } from "../../shared/middlewares/auth.middleware";
import { roleMiddleware } from "../../shared/middlewares/role.middleware";

const router = Router();

router.post("/", authMiddleware, roleMiddleware("RH"),createEmployees);
router.get("/", authMiddleware, roleMiddleware("RH"), getAllEmployees);
router.put("/:id", authMiddleware, roleMiddleware("RH"), updateEmployees)
router.delete("/:id", authMiddleware, roleMiddleware("RH"), delteEmployees)
router.put("/:id/activate", authMiddleware, roleMiddleware("RH"), activateEmployees)

export default router;