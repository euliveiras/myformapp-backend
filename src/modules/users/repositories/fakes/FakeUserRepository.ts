import {v4 as uuid} from 'uuid';
//
import IUserRepository from '../IUserRepository';
import User from '../../infra/typeorm/entities/User';

interface ICreateDTO{
    user: string;
    email: string;
    password: string;
}

export default class FakeUserRepository implements IUserRepository{
    private fakeUserRepository: User[] = [];

    public async create({
      user, email, password}: ICreateDTO): Promise<User> {
      const newUser = new User();

      Object.assign(newUser, {
        id: uuid(),
        user,
        email,
        password,
        created_at: new Date(),
        updated_at: new Date(),
      });

      this.fakeUserRepository.push(newUser);

      return newUser;
    };

    public async findByEmail(email: string): Promise<User | undefined>{
      const findUserIndex = this.fakeUserRepository.findIndex(user => user.email === email);
      return this.fakeUserRepository[findUserIndex];
    }
}
