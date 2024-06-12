import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FarmProduceModuleBase } from "./base/farmProduce.module.base";
import { FarmProduceService } from "./farmProduce.service";
import { FarmProduceController } from "./farmProduce.controller";
import { FarmProduceResolver } from "./farmProduce.resolver";

@Module({
  imports: [FarmProduceModuleBase, forwardRef(() => AuthModule)],
  controllers: [FarmProduceController],
  providers: [FarmProduceService, FarmProduceResolver],
  exports: [FarmProduceService],
})
export class FarmProduceModule {}
