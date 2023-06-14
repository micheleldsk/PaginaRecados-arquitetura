
import { Message } from "../../../models";
import { CacheRepository } from "../../../shared/database/repositories/cache.repository";
import { UsersRepository } from "../../users/repositories";
import { MessageRepository } from "../repositories";
import { GetUserMessagesUseCase } from "./get-user-messages.usecase";


export class CreateMessageUseCase {
    constructor(private _repository: MessageRepository | UsersRepository) {}

    async execute(title: string, description: string, userId: string) {
        const newMessage = await Message.create(title, description, userId);

        if(this._repository instanceof MessageRepository) {
            const response = await this._repository.addMessage(newMessage);

            this.setUserMessagesCache(userId);
			this.setTaskCache(newMessage);

        return response;
    }
}

    async checkUserId(userId: string) {
        if (this._repository instanceof UsersRepository) {
            const response = await this._repository.checkUserId(userId);

        return response;
    }
}

    async setUserMessagesCache(userId: string) {
        const userMessages = await new GetUserMessagesUseCase(
            new MessageRepository()
    ).execute(userId, true);

    const cacheRepository = new CacheRepository();

    cacheRepository.set(`USER_TASKS_LIST_${userId}`, userMessages);
}

    async setTaskCache(message: Message) {
        const cacheRepository = new CacheRepository();

        cacheRepository.set(`TASK_${message.id}`, message);
    }
}