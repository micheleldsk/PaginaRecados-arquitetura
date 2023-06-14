import { makeRoutes } from '.';
import express, { Request, Response } from 'express';
import cors from 'cors';

export const createServer = () => {
	const app = express();

	app.use(cors());

	app.use(express.json());

	app.get("/", (req: Request, res: Response) => 
	res.status(200).send(`<h1>Bem vindo a minha aplicação!</h1>
						  <h3>Refatoração afim de aplicar a arquitetura proposta 
						  no módulo de Arquitetura de Software - Junho-2023</h3>`))

	makeRoutes(app);

	return app;
};
