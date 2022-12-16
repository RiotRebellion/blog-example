import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  //TODO: email and other important
}

export class LoginUserDTO {
  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsString()
  @IsNotEmpty()
  public password: string;
}
