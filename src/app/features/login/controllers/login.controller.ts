import { Request, Response} from 'express'
import { LoginUsecase } from '../usecases';
import { UsersRepository } from '../../users/repositories';
import { HttpHelper } from '../../../shared/utils/helpers/http.helper';

export class LoginController {
  async login(req: Request, res:Response) {
    try {
      const { email, password } = req.body;

      // const loginService = new LoginService()
      const useCase = new LoginUsecase(new UsersRepository());

      const response = await useCase.execute(email, password);
    
      if (response === null) {
				return HttpHelper.badRequest(
					res,
					'Usuário não encontrado.',
					404
				);
			}
      
    if (response === undefined) {
      return HttpHelper.badRequest(
        res,
        'E-mail ou senha incorretos.'
      );
    }

    return HttpHelper.success(res, undefined, response);
		} catch (error: any) {
			return HttpHelper.serverError(res, error);
		}
  }
}