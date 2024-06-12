import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnalysisReportModuleBase } from "./base/analysisReport.module.base";
import { AnalysisReportService } from "./analysisReport.service";
import { AnalysisReportController } from "./analysisReport.controller";
import { AnalysisReportResolver } from "./analysisReport.resolver";

@Module({
  imports: [AnalysisReportModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnalysisReportController],
  providers: [AnalysisReportService, AnalysisReportResolver],
  exports: [AnalysisReportService],
})
export class AnalysisReportModule {}
