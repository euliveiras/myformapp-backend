import { Request, Response } from "express";
//
import CreateUserService from "../../../services/CreateUserService";
import UserRepository from "../../typeorm/repositories/UserRepository";

export default class SignUpController {
  public async execute(req: Request, res: Response): Promise<Response> {
    const { user, email, password } = req.body;
    const userRepository = new UserRepository();
    const createUserService = new CreateUserService(userRepository);

    const createdUser = await createUserService.execute({
      user,
      email,
      password,
    });

    return res.json(createdUser);
  }
}
