import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PesticideModuleBase } from "./base/pesticide.module.base";
import { PesticideService } from "./pesticide.service";
import { PesticideController } from "./pesticide.controller";
import { PesticideResolver } from "./pesticide.resolver";

@Module({
  imports: [PesticideModuleBase, forwardRef(() => AuthModule)],
  controllers: [PesticideController],
  providers: [PesticideService, PesticideResolver],
  exports: [PesticideService],
})
export class PesticideModule {}
