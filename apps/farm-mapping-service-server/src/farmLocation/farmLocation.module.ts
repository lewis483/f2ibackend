import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FarmLocationModuleBase } from "./base/farmLocation.module.base";
import { FarmLocationService } from "./farmLocation.service";
import { FarmLocationController } from "./farmLocation.controller";
import { FarmLocationResolver } from "./farmLocation.resolver";

@Module({
  imports: [FarmLocationModuleBase, forwardRef(() => AuthModule)],
  controllers: [FarmLocationController],
  providers: [FarmLocationService, FarmLocationResolver],
  exports: [FarmLocationService],
})
export class FarmLocationModule {}
