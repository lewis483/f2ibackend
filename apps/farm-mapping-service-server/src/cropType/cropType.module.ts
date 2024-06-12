import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CropTypeModuleBase } from "./base/cropType.module.base";
import { CropTypeService } from "./cropType.service";
import { CropTypeController } from "./cropType.controller";
import { CropTypeResolver } from "./cropType.resolver";

@Module({
  imports: [CropTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [CropTypeController],
  providers: [CropTypeService, CropTypeResolver],
  exports: [CropTypeService],
})
export class CropTypeModule {}
