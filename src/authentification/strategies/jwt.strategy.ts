import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'ANASS',
      ignoreExpiration: false,
    });
  }

  validate(playloed: any) {
    console.log(playloed);
    return playloed;
  }
}
