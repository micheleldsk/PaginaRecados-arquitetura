import { CreateUserUseCase } from "./../../../../../src/app/features/users/usecases/create-user.usecase";
import { UsersRepository } from "./../../../../../src/app/features/users/repositories/users.repository";
import { User } from "./../../../../../src/app/models/user.model";

describe("Create user usecase tests", () => {
  beforeAll(async () => manageConnections("connect"));
  afterAll(async () => manageConnections("destroy"));

  const makeSut = () => {
    return new CreateUserUseCase(new UsersRepository());
  };

  test("Should return an user", async () => {
    const sut = makeSut();

    jest
      .spyOn(UsersRepository.prototype, "addUser")
      .mockResolvedValue(
        new User("Michele Ladanivski", "micheleldsk@gmail.com", "senha123")
      );

    // const result: User = await sut.execute({
    //   name: "Michele Ladanivski",
    //   email: "micheleldsk@gmail.com",
    //   password: "senha123",
    // });

    const result = await sut.execute(
      "Michele Ladanivski",
      "micheleldsk@gmail.com",
      "senha123"
    );

    expect(result).toBeInstanceOf(User);
    expect(result).toHaveProperty("id");
  });
});
function manageConnections(arg0: string) {
  throw new Error("Function not implemented.");
}
