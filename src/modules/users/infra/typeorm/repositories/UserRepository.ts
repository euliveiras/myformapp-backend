import { getRepository, Repository } from "typeorm";
//
import User from "../entities/User";
import IUserRepository from "../../../repositories/IUserRepository";

interface ICreateDTO {
  user: string;
  email: string;
  password: string;
}

export default class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({
    user,
    email,
    password,
  }: ICreateDTO): Promise<User> {
    const newUser = this.ormRepository.create({
      user,
      email,
      password,
    });

    await this.ormRepository.save(newUser);

    return newUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne({ where: { email } });
    return findUser;
  }
}
