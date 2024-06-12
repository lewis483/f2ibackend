import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClimateDataModuleBase } from "./base/climateData.module.base";
import { ClimateDataService } from "./climateData.service";
import { ClimateDataController } from "./climateData.controller";
import { ClimateDataResolver } from "./climateData.resolver";

@Module({
  imports: [ClimateDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClimateDataController],
  providers: [ClimateDataService, ClimateDataResolver],
  exports: [ClimateDataService],
})
export class ClimateDataModule {}
