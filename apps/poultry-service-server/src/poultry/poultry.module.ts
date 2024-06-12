import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PoultryModuleBase } from "./base/poultry.module.base";
import { PoultryService } from "./poultry.service";
import { PoultryController } from "./poultry.controller";
import { PoultryResolver } from "./poultry.resolver";

@Module({
  imports: [PoultryModuleBase, forwardRef(() => AuthModule)],
  controllers: [PoultryController],
  providers: [PoultryService, PoultryResolver],
  exports: [PoultryService],
})
export class PoultryModule {}
