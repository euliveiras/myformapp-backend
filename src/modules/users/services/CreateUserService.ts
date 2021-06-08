import IUserRepository from "../repositories/IUserRepository";
import getTransporter from "../../shared/infra/providers/NodeMailerConfig";
import User from "../infra/typeorm/entities/User";
import AppError from "../../shared/errors/AppError";

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
    const transporter = await getTransporter();
    if (findUser) {
      throw new AppError("User already in use!");
    }
    const createdUser = await this.userRepository.create({
      user,
      email,
      password,
    });

    transporter.sendMail({
      from: email,
      to: email,
      subject: "Hello ✔",
      text: "Hello world?",
      html:
        `<h1>Hello world?</h1><p>seu dados são: ${user},${email} e ${password}</p>`,
    }, (error, info) => console.log(error, info));

    return createdUser;
  }
}
