import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AgriculturalProductModuleBase } from "./base/agriculturalProduct.module.base";
import { AgriculturalProductService } from "./agriculturalProduct.service";
import { AgriculturalProductController } from "./agriculturalProduct.controller";
import { AgriculturalProductResolver } from "./agriculturalProduct.resolver";

@Module({
  imports: [AgriculturalProductModuleBase, forwardRef(() => AuthModule)],
  controllers: [AgriculturalProductController],
  providers: [AgriculturalProductService, AgriculturalProductResolver],
  exports: [AgriculturalProductService],
})
export class AgriculturalProductModule {}
