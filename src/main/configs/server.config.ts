import { makeRoutes } from '.';
import express from 'express';
import cors from 'cors';

export const createServer = () => {
	const app = express();

	app.use(cors());

	app.use(express.json());

	makeRoutes(app);

	return app;
};
