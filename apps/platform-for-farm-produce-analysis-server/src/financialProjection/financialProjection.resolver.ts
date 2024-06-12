import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FinancialProjectionResolverBase } from "./base/financialProjection.resolver.base";
import { FinancialProjection } from "./base/FinancialProjection";
import { FinancialProjectionService } from "./financialProjection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FinancialProjection)
export class FinancialProjectionResolver extends FinancialProjectionResolverBase {
  constructor(
    protected readonly service: FinancialProjectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
