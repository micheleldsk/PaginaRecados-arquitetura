import {Request, Response} from 'express'
import { CreateUserUseCase, GetUserByIdUseCase, GetUsersUseCase } from '../usecases';
import { UsersRepository } from '../repositories';
import { HttpHelper } from '../../../shared/utils/helpers/http.helper';


export class UsersController {
    async addUser(req: Request, res: Response) {
      try {
        const { name, email, password } = req.body;

        const useCase = new CreateUserUseCase(new UsersRepository());

        const response = await useCase.execute(name, email, password);

        return HttpHelper.success(res, undefined, response, 201);
      }catch (error: any) {
        return HttpHelper.serverError(res, error);
      }
    }

    async getUsers(_: Request, res: Response) {
      try {
        const useCase = new GetUsersUseCase(new UsersRepository());
  
        const response = await useCase.execute();
  
        return HttpHelper.success(res, undefined, response);
      } catch (error: any) {
        return HttpHelper.serverError(res, error);
      }
    }
  
    async getUserById(req: Request, res: Response) {
      try {
        const { id } = req.params;
  
        const useCase = new GetUserByIdUseCase(new UsersRepository());
  
        const response = await useCase.execute(id);
  
        return HttpHelper.success(res, undefined, response);
      } catch (error: any) {
        return HttpHelper.serverError(res, error);
      }
    }
}