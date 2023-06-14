import { UpdateMessagesUseCase } from '../usecases';
import { MessageRepository } from '../repositories';
import { Request, Response, NextFunction } from 'express';
import { HttpHelper } from '../../../shared/utils/helpers/http.helper';

export const checkMessageValidator = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { id } = req.params;

	const useCase = new UpdateMessagesUseCase(new MessageRepository());

	const response = await useCase.checkMessageId(id);

	if (!response) {
		return HttpHelper.badRequest(res, 'Recado não encontrado.', 404);
	}

	next();
};