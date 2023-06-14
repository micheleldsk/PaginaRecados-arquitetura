import { CacheRepository } from "../../../shared/database/repositories/cache.repository";
import { MessageRepository } from "../repositories";
import { GetUserMessagesUseCase } from "./get-user-messages.usecase";


export class DeleteMessageUseCase {
    constructor(private _repository: MessageRepository) {}

    async execute(id: string, userId: string) {
        const response = await this._repository.deleteMessage(id);

        this.setUserMessagesCache(userId);

        return response;
    }

    async checkMessageId(id: string) {
        const response = await this._repository.checkMessageId(id);

        return response; 
    }

    async setUserMessagesCache(userId: string) {
		const userMessages = await new GetUserMessagesUseCase(
			new MessageRepository()
		).execute(userId, true);

		const cacheRepository = new CacheRepository();

		cacheRepository.set(`USER_TASKS_LIST_${userId}`, userMessages);
	}
}