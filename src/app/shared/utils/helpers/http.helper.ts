import { IDefaultResponse } from '../interfaces';
import { Response } from 'express';

export class HttpHelper {
	static success(res: Response, message?: string, data?: any, code?: number) {
		return res.status(code ?? 200).send({
			success: true,
			message,
			data,
		} as IDefaultResponse);
	}

	static badRequest(res: Response, message?: string, code?: number) {
		return res.status(code ?? 400).send({
			success: false,
			message,
		} as IDefaultResponse);
	}

	static serverError(res: Response, message?: string, code?: number) {
		return res.status(code ?? 500).send({
			success: false,
			message,
		});
	}
}