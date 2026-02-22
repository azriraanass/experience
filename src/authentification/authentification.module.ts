import { Module } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { AuthentificationController } from './authentification.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AuthentificationController],
  providers: [AuthentificationService],
})
export class AuthentificationModule {}
