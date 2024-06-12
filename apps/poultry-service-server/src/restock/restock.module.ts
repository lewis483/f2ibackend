import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RestockModuleBase } from "./base/restock.module.base";
import { RestockService } from "./restock.service";
import { RestockController } from "./restock.controller";
import { RestockResolver } from "./restock.resolver";

@Module({
  imports: [RestockModuleBase, forwardRef(() => AuthModule)],
  controllers: [RestockController],
  providers: [RestockService, RestockResolver],
  exports: [RestockService],
})
export class RestockModule {}
