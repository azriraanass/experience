import { Module } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { AuthentificationController } from './authentification.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'ANASS',
      signOptions: {
        expiresIn: '15m',
      },
    }),
    PassportModule,
  ],
  controllers: [AuthentificationController],
  providers: [AuthentificationService, LocalStrategy, JwtStrategy],
})
export class AuthentificationModule {}
