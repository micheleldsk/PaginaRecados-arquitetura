import { makeRoutes } from '.';
import express, { Request, Response } from 'express';
import cors from 'cors';

export const createServer = () => {
	const app = express();

	app.use(cors());

	app.use(express.json());

	app.get("/", (Req: Request, Res: Response) => Res.status(200).send(`<h1>Minha aplicação funfou!</h1>`))

	makeRoutes(app);

	return app;
};
