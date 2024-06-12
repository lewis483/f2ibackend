import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EggBatchModuleBase } from "./base/eggBatch.module.base";
import { EggBatchService } from "./eggBatch.service";
import { EggBatchController } from "./eggBatch.controller";
import { EggBatchResolver } from "./eggBatch.resolver";

@Module({
  imports: [EggBatchModuleBase, forwardRef(() => AuthModule)],
  controllers: [EggBatchController],
  providers: [EggBatchService, EggBatchResolver],
  exports: [EggBatchService],
})
export class EggBatchModule {}
