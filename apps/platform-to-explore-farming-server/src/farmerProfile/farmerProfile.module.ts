import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FarmerProfileModuleBase } from "./base/farmerProfile.module.base";
import { FarmerProfileService } from "./farmerProfile.service";
import { FarmerProfileController } from "./farmerProfile.controller";
import { FarmerProfileResolver } from "./farmerProfile.resolver";

@Module({
  imports: [FarmerProfileModuleBase, forwardRef(() => AuthModule)],
  controllers: [FarmerProfileController],
  providers: [FarmerProfileService, FarmerProfileResolver],
  exports: [FarmerProfileService],
})
export class FarmerProfileModule {}
