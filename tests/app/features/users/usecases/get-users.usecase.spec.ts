import { GetUsersUseCase } from "./../../../../../src/app/features/users/usecases";
import { UsersRepository } from "../../../../../src/app/features/users/repositories";
import { UserEntity } from "../../../../../src/app/shared/database/entities";

describe("Get users usecase tests", () => {
  beforeAll(async () => manageConnections("connect"));
  afterAll(async () => manageConnections("destroy"));

  const makeSut = () => {
    return new GetUsersUseCase(new UsersRepository());
  };

  test("Should return an empty array", async () => {
    const sut = makeSut();

    jest.spyOn(UsersRepository.prototype, "getUsers").mockResolvedValueOnce([]);

    const result = await sut.execute();

    expect(result).toHaveLength(0);
  });

  test("Should return an user entity array", async () => {
    const sut = makeSut();

    const user = new UserEntity();

    jest
      .spyOn(UsersRepository.prototype, "getUsers")
      .mockResolvedValueOnce([user]);

    const result = await sut.execute();

    expect(result).toHaveLength(1);
    expect(result.at(0)).toBeInstanceOf(UserEntity);
  });
});
function manageConnections(arg0: string) {
  throw new Error("Function not implemented.");
}
