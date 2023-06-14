import { Router } from 'express';
import { UsersController } from '../controllers';
import { createUserValidator } from '../validators';


export const usersRouter = Router();

usersRouter.post('/create', [createUserValidator], new UsersController().addUser);

usersRouter.get('/', new UsersController().getUsers);

usersRouter.get('/:uid', new UsersController().getUserById);

// export const userRouter = Router()

// userRouter.post('/user', createUserValidator,new UserController().addUser)