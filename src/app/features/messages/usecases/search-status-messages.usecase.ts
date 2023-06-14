import { MessageRepository } from "../repositories";


export class SearchStatusMessagesUseCase {
    constructor(private _repository: MessageRepository) {}
    
    async execute(userId:string, active: boolean) {
        const filteredMessages = await this._repository.searchByStatus(userId, active);

        return filteredMessages;
    }
}