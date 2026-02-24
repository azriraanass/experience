import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { AccessRefreshToken } from 'src/types/AccessRefreshToken';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthentificationService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<AccessRefreshToken | null> {
    const userFounded: User | null =
      await this.userService.findOnByEmail(email);

    if (userFounded == null) throw new BadRequestException('Email Invalid');

    if ((await bcrypt.compare(pass, userFounded.password)) === false)
      throw new UnauthorizedException('Password Invalid');

    return this.login('' + userFounded.id, userFounded.email);
  }

  login(userId: string, userEmail: string): AccessRefreshToken {
    const playload = { id: userId, email: userEmail };

    return {
      access_token: this.jwtService.sign(playload, { expiresIn: '15m' }),
    };
  }

  async register(createUserDto: CreateUserDto): Promise<any> {
    const user = await this.userService.create(createUserDto);
    return {
      message: 'User Created ',
      status: 201,
      user: user,
    };
  }
}
