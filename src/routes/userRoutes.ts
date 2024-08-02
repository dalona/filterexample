import { Router } from 'express';
import {UserController} from '../controllers/userController';

const userRoutes = Router();

userRoutes.get('/', UserController.getAll);
/*router.get('/users/:id', getUserById);
router.post('/users', createUser);*/

export default userRoutes;