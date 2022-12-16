import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { LoginUserDTO } from 'src/server/api/user/user.dto';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  //не берет объектом, а берет параметрами -.-
  async validate(username: string, password: string): Promise<any> {
    const payload = { username: username, password: password };
    console.log(payload);
    const user = await this.authService.ValidateUser(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
