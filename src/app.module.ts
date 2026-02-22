import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './database/config/typeorm.config';
import { UsersModule } from './users/users.module';
import { AuthentificationModule } from './authentification/authentification.module';



@Module({
  imports: [
    PostsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig()),
    UsersModule,
    AuthentificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule 
{}
