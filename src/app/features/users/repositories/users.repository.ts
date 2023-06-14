import { DatabaseConnection } from "../../../../main/database";
import { User } from "../../../models";
import { UserEntity } from "../../../shared/database/entities";

export class UsersRepository {

    private _repository =
		DatabaseConnection.connection.getRepository(UserEntity);

	private toModel({
		id,
		name,
		email,
		password,
	}: UserEntity): User {
		return User.create(id, name, email, password);
	}

    async addUser(user: User): Promise<User> {
        
        const newUser = this._repository.create(user);
        
        const response = await this._repository.save(newUser);

        return this.toModel(response);
    }

    async getUsers() {
		const response = await this._repository.find();

		return response;
	}

	async getUserById(id: string) {
		const response = await this._repository.findOne({ where: { id } });

		return response;
	}

    async checkValidEmail(email: string): Promise<boolean> {
        const response = await this._repository.exist({where:{email}});

        return response;
    }

    async login(email: string, password: string): Promise<User|null> {
        const response = await this._repository.findOne({where:{email, password}});

        if(response) {
            return this.toModel(response) ;
        }
                
        return null;

    }

    async checkUserId(userId: string) {
        const response = await this._repository.findOne({where:{id: userId}});
                
        return response;
    }
}
