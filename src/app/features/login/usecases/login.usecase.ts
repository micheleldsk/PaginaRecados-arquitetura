import { UsersRepository } from "../../users/repositories";

export class LoginUsecase {
    constructor(private _repository: UsersRepository) {}

    async execute(email: string, password: string) {
      const response = await this._repository.login(email, password);

    return response;
  }
}