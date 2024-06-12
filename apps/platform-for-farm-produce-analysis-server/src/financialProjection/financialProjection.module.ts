import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FinancialProjectionModuleBase } from "./base/financialProjection.module.base";
import { FinancialProjectionService } from "./financialProjection.service";
import { FinancialProjectionController } from "./financialProjection.controller";
import { FinancialProjectionResolver } from "./financialProjection.resolver";

@Module({
  imports: [FinancialProjectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [FinancialProjectionController],
  providers: [FinancialProjectionService, FinancialProjectionResolver],
  exports: [FinancialProjectionService],
})
export class FinancialProjectionModule {}
