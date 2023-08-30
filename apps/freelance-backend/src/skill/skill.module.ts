import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SkillModuleBase } from "./base/skill.module.base";
import { SkillService } from "./skill.service";
import { SkillController } from "./skill.controller";
import { SkillResolver } from "./skill.resolver";

@Module({
  imports: [SkillModuleBase, forwardRef(() => AuthModule)],
  controllers: [SkillController],
  providers: [SkillService, SkillResolver],
  exports: [SkillService],
})
export class SkillModule {}
