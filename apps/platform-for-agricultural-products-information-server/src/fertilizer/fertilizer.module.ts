import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FertilizerModuleBase } from "./base/fertilizer.module.base";
import { FertilizerService } from "./fertilizer.service";
import { FertilizerController } from "./fertilizer.controller";
import { FertilizerResolver } from "./fertilizer.resolver";

@Module({
  imports: [FertilizerModuleBase, forwardRef(() => AuthModule)],
  controllers: [FertilizerController],
  providers: [FertilizerService, FertilizerResolver],
  exports: [FertilizerService],
})
export class FertilizerModule {}
