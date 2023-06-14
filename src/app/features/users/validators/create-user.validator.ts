import { Request, Response, NextFunction } from "express";
import { CreateUserUseCase } from "../usecases";
import { HttpHelper } from "../../../shared/utils/helpers/http.helper";
import { DefaultMessagesHelper } from "../../../shared/utils/helpers/default-messages.helper";
import { UsersRepository } from "../repositories";

export const createUserValidator = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  if (!name) {
    return HttpHelper.badRequest(
        res,
        DefaultMessagesHelper.notFound('nome'),
        404
    );
  }

  if (!email) {
    return HttpHelper.badRequest(
        res,
        DefaultMessagesHelper.notFound('e-mail'),
        404
    );
  }

  if (!password) {
    return HttpHelper.badRequest(
        res,
        DefaultMessagesHelper.notFound('senha'),
        404
    );
  }

  const useCase = new CreateUserUseCase(new UsersRepository());

  const emailIsRegistered = await useCase.checkValidEmail(email);

  if (emailIsRegistered) {
    return HttpHelper.badRequest(
        res,
        DefaultMessagesHelper.duplicatedProperty('e-mail', email),
        400
    );
  }
  
  next();
}