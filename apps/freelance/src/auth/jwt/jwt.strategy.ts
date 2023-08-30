import { Inject, Injectable } from "@nestjs/common";
import { JWT_SECRET_KEY } from "../../constants";
import { JwtStrategyBase } from "./base/jwt.strategy.base";
import { User1Service } from "../../user1/user1.service";

@Injectable()
export class JwtStrategy extends JwtStrategyBase {
  constructor(
    @Inject(JWT_SECRET_KEY) secretOrKey: string,
    protected readonly user1Service: User1Service
  ) {
    super(secretOrKey, user1Service);
  }
}
