import { UsersRepository } from '../repositories';

export class GetUsersUseCase {
	constructor(private _repository: UsersRepository) {}

	async execute() {
		const response = await this._repository.getUsers();

		return response;
	}
}