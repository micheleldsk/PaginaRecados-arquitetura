import { CacheRepository } from "../../../shared/database/repositories/cache.repository";
import { MessageRepository } from "../repositories";


export class GetUserMessagesUseCase {
    constructor(private _repository: MessageRepository) {}

    async execute(userId: string, noCache?: boolean) {
        const cacheRepository = new CacheRepository();

        if (!noCache) {
			const cache = await cacheRepository.get(
				`USER_TASKS_LIST_${userId}`
			);

			if (cache) {
				return cache;
			}
			const response = await this._repository.getUserMessages(userId);

			return response;
		}

		const response = await this._repository.getUserMessages(userId);

		return response;
    }
}