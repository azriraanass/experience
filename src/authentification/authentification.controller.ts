import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthentificationService } from "./authentification.service";
import { AuthGuard } from "@nestjs/passport";
import { AccessToken } from "src/types/AccessToken";
import { RegisterRequestDto } from "./dtos/register.request.dto";

@Controller("authentification")
export class AuthentificationController {
  constructor(
    private readonly authentificationService: AuthentificationService,
  ) {}

  @UseGuards(AuthGuard("local"))
  @Post("login")
  async login(@Request() req): Promise<AccessToken> {
    return this.authentificationService.login(req.user);
  }

  @Post("register")
  async register(
    @Body() registerBody: RegisterRequestDto,
  ): Promise<AccessToken> {
    return await this.authentificationService.register(registerBody);
  }
}
