import { UsersRepository } from '../repositories';

export class GetUserByIdUseCase {
	constructor(private _repository: UsersRepository) {}

	async execute(id: string) {
		const response = await this._repository.getUserById(id);

		return response;
	}
}
