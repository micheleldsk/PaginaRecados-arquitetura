import { MessageRepository } from "../repositories";


export class SearchTitleMessagesUseCase {
    constructor(private _repository: MessageRepository) {}
    
    async execute(userId:string, title: string) {
        const filteredMessages = await this._repository.searchByTitle(userId, title);

        return filteredMessages;
    }
}