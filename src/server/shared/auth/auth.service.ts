import { Injectable } from '@nestjs/common';
import { LoginUserDTO, RegisterUserDto } from 'src/server/api/user/user.dto';
import { UserService } from 'src/server/api/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/server/api/user/user.entity';
import { AuthentificationException } from '../utils/exceptions/authentification-exception';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async ValidateUser(loginUserDto: LoginUserDTO): Promise<User> {
    const user = await this.userService.findOneByUsername(
      loginUserDto.username,
    );
    if (user) {
      const { password } = user;
      console.log(`${user.password} === ${loginUserDto.password}`);
      console.log(user.password === loginUserDto.password);
      if (user.password === loginUserDto.password) {
        return Promise.resolve(user);
      } else throw new AuthentificationException('Password is not correct');
    } else throw new AuthentificationException('User do not exist');
  }

  async Login(user: any): Promise<any> {
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async Register(registerUserDto: RegisterUserDto): Promise<any> {
    const existUser = await this.userService.findOneByUsername(
      registerUserDto.username,
    );
    if (!existUser) {
      const user = new User();
      user.username = registerUserDto.username;
      user.password = registerUserDto.password;
      return this.userService.createUser(user);
    } else throw new AuthentificationException('User is already exist');
  }
}
