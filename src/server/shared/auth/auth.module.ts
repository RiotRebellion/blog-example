import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt/dist';
import { PassportModule } from '@nestjs/passport/dist';
import { UserModule } from 'src/server/api/user/user.module';
import { jwtConstants } from '../utils/constants';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt/jwt.strategy';
import { LocalStrategy } from './local/local.strategy';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
