
import { User } from "../../../models";
import { UsersRepository } from "../repositories";

export class CreateUserUseCase {
    constructor(private _repository: UsersRepository) {}

    async execute(name: string, email: string, password: string) {
        const user = User.create(name, email, password);

        return await this._repository.addUser(user);
    }

    async checkValidEmail(email: string) {
      return await this._repository.checkValidEmail(email)
    }
}