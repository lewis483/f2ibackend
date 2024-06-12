import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConsumerModuleBase } from "./base/consumer.module.base";
import { ConsumerService } from "./consumer.service";
import { ConsumerController } from "./consumer.controller";
import { ConsumerResolver } from "./consumer.resolver";

@Module({
  imports: [ConsumerModuleBase, forwardRef(() => AuthModule)],
  controllers: [ConsumerController],
  providers: [ConsumerService, ConsumerResolver],
  exports: [ConsumerService],
})
export class ConsumerModule {}
