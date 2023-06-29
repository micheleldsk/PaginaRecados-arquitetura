import { CreateMessageUseCase } from "./../../../../src/app/features/messages/usecases";
import { MessageRepository } from "../../../../src/app/features/messages/repositories";
import { Message } from "./../../../../src/app/models";

describe("Create message usecase tests", () => {
  beforeAll(async () => manageConnections("connect"));
  afterAll(async () => manageConnections("destroy"));

  const makeSut = () => {
    return new CreateMessageUseCase(new MessageRepository());
  };

  test("Should return a message", async () => {
    const sut = makeSut();

    jest
      .spyOn(MessageRepository.prototype, "addMessage")
      .mockResolvedValue(new Message("title", "description", "1a2b3c4d"));

    // const result = await sut.execute({
    //   title: "title",
    //   description: "description",
    // });

    const result = await sut.execute("title", "description", "1a2b3c4d");

    expect(result).toBeInstanceOf(Message);
    expect(result).toHaveProperty("id");
  });
});
function manageConnections(arg0: string) {
  throw new Error("Function not implemented.");
}
