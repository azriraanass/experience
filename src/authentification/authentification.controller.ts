import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { AccessRefreshToken } from 'src/types/AccessRefreshToken';
import { RegisterRequestDto } from './dtos/register.request.dto';
import { LocalGuard } from './guards/local.guard';
import type { Request } from 'express';
import { JwtGuard } from './guards/jwt.guard';

@Controller('authentification')
export class AuthentificationController {
  constructor(
    private readonly authentificationService: AuthentificationService,
  ) {}

  @UseGuards(LocalGuard)
  @Post('login')
  async login(@Req() req: Request): Promise<any> {
    return req.user;
  }

  @Get('profile')
  @UseGuards(JwtGuard)
  async profile() {
    return 'this is your profile';
  }

  @Post('register')
  async register(
    @Body() registerBody: RegisterRequestDto,
  ): Promise<AccessRefreshToken> {
    return await this.authentificationService.register(registerBody);
  }
}
