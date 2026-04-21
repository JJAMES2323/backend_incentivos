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

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Crear nueva orden de producción
 *     tags:
 *       - Órdenes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - reference_id
 *               - quantity
 *               - module
 *             properties:
 *               reference_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *               module:
 *                 type: string
 *     responses:
 *       201:
 *         description: Orden creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductionOrder'
 *       400:
 *         description: Error en la solicitud
 *   get:
 *     summary: Obtener todas las órdenes
 *     tags:
 *       - Órdenes
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de órdenes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProductionOrder'
 *       400:
 *         description: Error en la solicitud
 */
router.post("/", CreateOrder);
router.get("/", authMiddleware, roleMiddleware("PRODUCCION"), GetOrders);

/**
 * @swagger
 * /api/orders/{id}:
 *   put:
 *     summary: Actualizar orden de producción
 *     tags:
 *       - Órdenes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *               status:
 *                 type: string
 *               quantity_pending:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Orden actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductionOrder'
 *       400:
 *         description: Error en la solicitud
 *   delete:
 *     summary: Eliminar orden de producción
 *     tags:
 *       - Órdenes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Orden eliminada
 *       400:
 *         description: Error en la solicitud
 */
router.put("/:id", authMiddleware, roleMiddleware("PRODUCCION"), UpdateOrder);
router.delete("/:id", authMiddleware, roleMiddleware("PRODUCCION"), DeleteOrder);

export default router;

