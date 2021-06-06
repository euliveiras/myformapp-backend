import IUserRepository from "../repositories/IUserRepository";
import UserRepository from "../infra/typeorm/repositories/UserRepository";
import User from "../infra/typeorm/entities/User";
import AppError from "../../shared/errors/AppError"

interface ICreateUserService {
  user: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  constructor(private userRepository: IUserRepository) {}
  public async execute({
    user,
    email,
    password,
  }: ICreateUserService): Promise<User | undefined> {
    const findUser = await this.userRepository.findByEmail(email);
    if (findUser) {
      throw new AppError("User already in use!")
    }
    return await this.userRepository.create({ user, email, password });
  }
}
