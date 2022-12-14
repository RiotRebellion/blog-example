import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './user.dto';
import { User } from './user.entity';
import { Role } from 'src/server/shared/auth/roles/role.enum';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  public async createUser(user: User): Promise<User> {
    return this.repository.save(user);
  }

  public async findOneByUsername(username: string): Promise<User | undefined> {
    return await this.repository.findOneBy({ username: username });
  }

  public async setAdminRole(id: number) {
    const user = await this.repository.findOne({ where: { id: id } });
    if (user) {
      user.role = Role.Admin;
      this.repository.update(id, user);
      return user;
    }
  }
}
