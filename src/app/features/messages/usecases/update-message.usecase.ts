import { CacheRepository } from "../../../shared/database/repositories/cache.repository";
import { MessageRepository } from "../repositories";
import { GetUserMessagesUseCase } from "./get-user-messages.usecase";


export class UpdateMessagesUseCase {
    constructor(private _repository: MessageRepository) {}
    
    async execute(title: string, description: string, id: string, status: boolean, userId: string) {
    
        const response = this._repository.updateMessage(id, title, description)
        this.setUserMessagesCache(userId);

        return response;
    }

    async checkMessageId(messageId: string) {
		const response = await this._repository.checkMessageId(messageId);

		return response;
	}

    async setUserMessagesCache(userId: string) {
		const userTasks = await new GetUserMessagesUseCase(
			new MessageRepository()
		).execute(userId, true);

		const cacheRepository = new CacheRepository();

		cacheRepository.set(`USER_TASKS_LIST_${userId}`, userTasks);
	}
}
