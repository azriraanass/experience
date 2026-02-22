import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";
import * as bcrypt from "bcrypt";
import { AccessToken } from "src/types/AccessToken";
import { CreateUserDto } from "src/users/dto/create-user.dto";

@Injectable()
export class AuthentificationService {
  constructor(
    private readonly userService: UsersService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user: User | null = await this.userService.findOnByEmail(email);

    if (user === null) throw new NotFoundException("User Not Founded !");

    const isMatch: boolean = await bcrypt.compare(password, user.password);

    if (isMatch === false)
      throw new UnauthorizedException("Wrong Credentials !");

    return user;
  }

  login(user: User): AccessToken {
    const playload = { email: user.email, userId: user.id };
    // return { access_token: this.jwtService.sign(playload) };
    return {access_token: "anass"};
  }

  async register(createUserDto: CreateUserDto): Promise<AccessToken> {
    let user: User | null = await this.userService.findOnByEmail(
      createUserDto.email,
    );

    if (user !== null) throw new UnauthorizedException("Email Already Taken !");

    user = await this.userService.create(createUserDto);

    return this.login(user);
  }
}
