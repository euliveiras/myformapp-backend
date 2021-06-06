import User from '../infra/typeorm/entities/User';

interface ICreateDTO {
  user: string;
  email: string;
  password: string;
}

export default interface IUserRepository {
  create(data: ICreateDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
};