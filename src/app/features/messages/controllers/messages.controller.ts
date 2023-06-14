import {Request, Response} from 'express'
import { CreateMessageUseCase, DeleteMessageUseCase, GetUserMessagesUseCase, UpdateMessagesUseCase } from '../usecases';
import { MessageRepository } from '../repositories';
import { HttpHelper } from '../../../shared/utils/helpers/http.helper';
import { ToggleActiveStatusUseCase } from '../usecases/toggle-active-status.usecase';
import { SearchTitleMessagesUseCase } from '../usecases/search-title-messages.usecase';
import { SearchStatusMessagesUseCase } from '../usecases/search-status-messages.usecase';

export class MessagesController {
    async addMessage(req: Request, res: Response) {
      try {
        const { title, description, userId } = req.body;
        
        const useCase = new CreateMessageUseCase(new MessageRepository());

        const response = await useCase.execute(title, description, userId);

        return HttpHelper.success(res, undefined, response, 201);
      }catch (error: any) {
        return HttpHelper.serverError(res, error);
      }
    }
      
      async getUserMessages(req: Request, res: Response) {
        try {
          const { userId } = req.params;

          const useCase = new GetUserMessagesUseCase(new MessageRepository());

			    const response = await useCase.execute(userId);

		    	return HttpHelper.success(res, undefined, response);
        }catch (error: any) {
          return HttpHelper.serverError(res, error);
        }
      }

      async updateMessage(req: Request, res: Response) {
        try {
          const { id, userId } = req.params;
          const { title, description, status } = req.body;

          const useCase = new UpdateMessagesUseCase(new MessageRepository());

          const response = await useCase.execute(title, description, id, status, userId);

          return HttpHelper.success(res, undefined, response);
        }catch (error: any) {
          return HttpHelper.serverError(res, error);
        }
      }

      async toggleActiveStatus(req: Request, res: Response) {
        try {
          const { messageId } = req.params;

          const useCase = new ToggleActiveStatusUseCase(new MessageRepository());
          const response = await useCase.execute(messageId);

          return HttpHelper.success(res, undefined, response);
        }catch (error: any) {
          return HttpHelper.serverError(res, error);
        }
      }

      async searchByTitleMessages(req: Request, res: Response) {
        try {
          const { title } = req.query;
          const { userId } = req.params;

          const useCase = new SearchTitleMessagesUseCase(new MessageRepository());

          const response = await useCase.execute(userId, title!.toString());

          return HttpHelper.success(res, undefined, response);
        }catch (error: any) {
          return HttpHelper.serverError(res, error);
        }        
      }

      async searchByStatusMessages(req: Request, res: Response) {
        try {
          const { active } = req.query;
          const { userId } = req.params;

          const activeBoolean = active === 'true' ? true : false;

          const useCase = new SearchStatusMessagesUseCase(new MessageRepository());

          const response = await useCase.execute(userId, activeBoolean);

          return HttpHelper.success(res, undefined, response);
        }catch (error: any) {
          return HttpHelper.serverError(res, error);
        }        
      }

      async deleteMessage(req: Request, res: Response) {
        try {
          const { id, userId } = req.params;

          const useCase = new DeleteMessageUseCase(new MessageRepository());

          const response = await useCase.execute(id, userId);

          return HttpHelper.success(res, undefined, response);
        }catch (error: any) {
          return HttpHelper.serverError(res, error);
        }
      }
    }
    

    