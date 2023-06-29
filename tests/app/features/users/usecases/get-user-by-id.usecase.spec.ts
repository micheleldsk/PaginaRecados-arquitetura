import { UsersRepository } from "../../../../../src/app/features/users/repositories";
import { GetUserByIdUseCase } from "./../../../../../src/app/features/users/usecases";
import { UserEntity } from "../../../../../src/app/shared/database/entities";

describe("Get user by id usecase tests", () => {
  beforeAll(async () => manageConnections("connect"));
  afterAll(async () => manageConnections("destroy"));

  const makeSut = () => {
    return new GetUserByIdUseCase(new UsersRepository());
  };

  test("Should return an user entity", async () => {
    const sut = makeSut();

    jest
      .spyOn(UsersRepository.prototype, "getUserById")
      .mockResolvedValueOnce(new UserEntity());

    const result = await sut.execute("valid-uid");

    expect(result).not.toBeNull();
    expect(result).toBeInstanceOf(UserEntity);
  });

  test("Should return null", async () => {
    const sut = makeSut();

    jest
      .spyOn(UsersRepository.prototype, "getUserById")
      .mockResolvedValueOnce(null);

    const result = await sut.execute("invalid-id");

    expect(result).toBeNull();
  });
});
function manageConnections(arg0: string) {
  throw new Error("Function not implemented.");
}
