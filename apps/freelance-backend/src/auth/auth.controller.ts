import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { Credentials } from "../auth/Credentials";
import { User1Info } from "./User1Info";

@ApiTags("auth")
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("login")
  async login(@Body() body: Credentials): Promise<User1Info> {
    return this.authService.login(body);
  }
}
