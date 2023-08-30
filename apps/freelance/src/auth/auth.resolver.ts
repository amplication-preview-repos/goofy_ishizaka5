import * as common from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthService } from "./auth.service";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { LoginArgs } from "./LoginArgs";
import { User1Info } from "./User1Info";

@Resolver(User1Info)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => User1Info)
  async login(@Args() args: LoginArgs): Promise<User1Info> {
    return this.authService.login(args.credentials);
  }

  @Query(() => User1Info)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async user1Info(@UserData() entityInfo: User1Info): Promise<User1Info> {
    return entityInfo;
  }
}
