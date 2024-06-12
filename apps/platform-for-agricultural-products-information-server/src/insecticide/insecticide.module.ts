import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InsecticideModuleBase } from "./base/insecticide.module.base";
import { InsecticideService } from "./insecticide.service";
import { InsecticideController } from "./insecticide.controller";
import { InsecticideResolver } from "./insecticide.resolver";

@Module({
  imports: [InsecticideModuleBase, forwardRef(() => AuthModule)],
  controllers: [InsecticideController],
  providers: [InsecticideService, InsecticideResolver],
  exports: [InsecticideService],
})
export class InsecticideModule {}
