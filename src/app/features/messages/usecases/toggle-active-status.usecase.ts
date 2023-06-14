import { MessageRepository } from "../repositories";


export class ToggleActiveStatusUseCase {
    constructor(private _repository: MessageRepository) {}

    async execute(messageId: string) {
        const updatedMessage = await this._repository.toggleActiveStatus(messageId);

        return updatedMessage;
    }
}