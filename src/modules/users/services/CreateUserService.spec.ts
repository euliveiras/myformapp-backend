import CreateUserService from "./CreateUserService";
import FakeUserRepository from "../repositories/fakes/FakeUserRepository";
import AppError from "../../shared/errors/AppError";

describe("CreateUserService", () => {
  it("should be able to create a new user", async () => {
    const fakeUserRepository = new FakeUserRepository();
    const createUserService = new CreateUserService(fakeUserRepository);

    expect(
      await createUserService.execute({
        user: "John Doe",
        email: "johndoe@email.com",
        password: "123123",
      }),
    ).toHaveProperty("user", "John Doe");
  });

  it("should not be a ble to create user with a already in use email", async () => {
    const fakeUserRepository = new FakeUserRepository();
    const createUserService = new CreateUserService(fakeUserRepository);

    const email = "johndoe@email.com";

    const user = await createUserService.execute({
      user: "John Doe",
      email,
      password: "123123",
    });

    await expect(
      createUserService.execute({
        user: "Oliver Stone",
        email,
        password: "12341234",
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
