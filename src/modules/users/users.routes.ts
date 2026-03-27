import { Router } from "express";
import { 
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
    changePassword,
    activeUser
} from './users.controller';
import { authMiddleware } from "../../shared/middlewares/auth.middleware";
import { roleMiddleware } from "../../shared/middlewares/role.middleware";

const router = Router();

router.post('/', authMiddleware, roleMiddleware('ADMIN'), createUser);

router.get('/', authMiddleware, roleMiddleware('ADMIN'), getAllUsers);

router.put('/:id', authMiddleware, roleMiddleware('ADMIN'), updateUser);

router.delete('/:id', authMiddleware, roleMiddleware('ADMIN'), deleteUser);

router.put('/:id/password', authMiddleware, roleMiddleware('ADMIN'), changePassword);

router.put('/:id/activate', authMiddleware, roleMiddleware('ADMIN'), activeUser);

export default router;
