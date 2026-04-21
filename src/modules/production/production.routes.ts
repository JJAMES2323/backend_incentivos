import { Router } from "express";
import {
    createProduction,
    updateProduction,
    deleteProduction
} from "./production.controller";
import { authMiddleware } from "../../shared/middlewares/auth.middleware";
import { roleMiddleware } from "../../shared/middlewares/role.middleware";

const router = Router()

/**
 * @swagger
 * /api/production:
 *   post:
 *     summary: Crear registro de producción
 *     tags:
 *       - Producción
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - order_id
 *               - reference_id
 *               - module
 *               - units
 *               - standard_time
 *               - total_time
 *             properties:
 *               order_id:
 *                 type: integer
 *               reference_id:
 *                 type: integer
 *               module:
 *                 type: string
 *               units:
 *                 type: integer
 *               standard_time:
 *                 type: number
 *               total_time:
 *                 type: number
 *     responses:
 *       201:
 *         description: Registro creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductionRecord'
 *       400:
 *         description: Error en la solicitud
 */
router.post("/", authMiddleware, roleMiddleware("PRODUCCION"),createProduction)

/**
 * @swagger
 * /api/production/{id}:
 *   put:
 *     summary: Actualizar registro de producción
 *     tags:
 *       - Producción
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
 *               units:
 *                 type: integer
 *               total_time:
 *                 type: number
 *     responses:
 *       200:
 *         description: Registro actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductionRecord'
 *       400:
 *         description: Error en la solicitud
 *   delete:
 *     summary: Eliminar registro de producción
 *     tags:
 *       - Producción
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
 *         description: Registro eliminado
 *       400:
 *         description: Error en la solicitud
 */
router.put("/:id", authMiddleware, roleMiddleware("PRODUCCION"), updateProduction)
router.delete("/:id", authMiddleware, roleMiddleware("PRODUCCION"), deleteProduction)

export default router;