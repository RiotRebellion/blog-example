import { Controller, UseGuards, Post, Body, UseFilters } from '@nestjs/common';
import { AuthService } from 'src/server/shared/auth/auth.service';
import { LocalAuthGuard } from 'src/server/shared/auth/local/local-auth.guard';
import { AuthentificationExceptionFilter } from 'src/server/shared/filters/authentification-exception.filter';
import { LoginUserDTO, RegisterUserDto } from './user.dto';

@Controller()
@UseFilters(AuthentificationExceptionFilter)
export class UserController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Body() loginUserDTO: LoginUserDTO) {
    return await this.authService.Login(loginUserDTO);
  }

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    return await this.authService.Register(registerUserDto);
  }
}
