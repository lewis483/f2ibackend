import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AnalysisReportResolverBase } from "./base/analysisReport.resolver.base";
import { AnalysisReport } from "./base/AnalysisReport";
import { AnalysisReportService } from "./analysisReport.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalysisReport)
export class AnalysisReportResolver extends AnalysisReportResolverBase {
  constructor(
    protected readonly service: AnalysisReportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
