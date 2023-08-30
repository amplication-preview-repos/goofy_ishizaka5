import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { IAuthStrategy } from "../../IAuthStrategy";
import { User1Info } from "../../User1Info";
import { User1Service } from "../../../user1/user1.service";

export class JwtStrategyBase
  extends PassportStrategy(Strategy)
  implements IAuthStrategy
{
  constructor(
    protected readonly secretOrKey: string,
    protected readonly user1Service: User1Service
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey,
    });
  }

  async validate(payload: User1Info): Promise<User1Info> {
    const { username } = payload;
    const user = await this.user1Service.findOne({
      where: { username },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    if (
      !Array.isArray(user.roles) ||
      typeof user.roles !== "object" ||
      user.roles === null
    ) {
      throw new Error("User roles is not a valid value");
    }
    return { ...user, roles: user.roles as string[] };
  }
}
