import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CropYieldPredictionModuleBase } from "./base/cropYieldPrediction.module.base";
import { CropYieldPredictionService } from "./cropYieldPrediction.service";
import { CropYieldPredictionController } from "./cropYieldPrediction.controller";
import { CropYieldPredictionResolver } from "./cropYieldPrediction.resolver";

@Module({
  imports: [CropYieldPredictionModuleBase, forwardRef(() => AuthModule)],
  controllers: [CropYieldPredictionController],
  providers: [CropYieldPredictionService, CropYieldPredictionResolver],
  exports: [CropYieldPredictionService],
})
export class CropYieldPredictionModule {}
