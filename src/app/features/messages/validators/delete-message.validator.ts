import { Request, Response, NextFunction } from 'express';
import { HttpHelper } from '../../../shared/utils/helpers/http.helper';

export const deleteMessageValidator = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { userId } = req.query;

	if (!userId) {
		return HttpHelper.badRequest(
			res,
			'ID do usuário não encontrado.',
			404
		);
	}

	next();
};