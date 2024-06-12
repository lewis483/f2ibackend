import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProduceInfoModuleBase } from "./base/produceInfo.module.base";
import { ProduceInfoService } from "./produceInfo.service";
import { ProduceInfoController } from "./produceInfo.controller";
import { ProduceInfoResolver } from "./produceInfo.resolver";

@Module({
  imports: [ProduceInfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProduceInfoController],
  providers: [ProduceInfoService, ProduceInfoResolver],
  exports: [ProduceInfoService],
})
export class ProduceInfoModule {}
