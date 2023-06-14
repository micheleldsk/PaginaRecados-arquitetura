import { Express } from 'express';
import { usersRouter } from '../../app/features/users/routes';
import { loginRouter } from '../../app/features/login/routes';
import { messagesRouter } from '../../app/features/messages/routes';

export const makeRoutes = (app: Express) => {
	app.use('/users', usersRouter);
	app.use('/login', loginRouter);
	app.use('/messages', messagesRouter);
};