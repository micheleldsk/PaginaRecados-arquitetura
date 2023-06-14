import { Router } from 'express';
import { loginValidator } from '../validators';
import { LoginController } from '../controllers';

export const loginRouter = Router();

loginRouter.post('/', [loginValidator], new LoginController().login);