import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UsageGuidelineModuleBase } from "./base/usageGuideline.module.base";
import { UsageGuidelineService } from "./usageGuideline.service";
import { UsageGuidelineController } from "./usageGuideline.controller";
import { UsageGuidelineResolver } from "./usageGuideline.resolver";

@Module({
  imports: [UsageGuidelineModuleBase, forwardRef(() => AuthModule)],
  controllers: [UsageGuidelineController],
  providers: [UsageGuidelineService, UsageGuidelineResolver],
  exports: [UsageGuidelineService],
})
export class UsageGuidelineModule {}
