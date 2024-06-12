import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UsageGuidelineResolverBase } from "./base/usageGuideline.resolver.base";
import { UsageGuideline } from "./base/UsageGuideline";
import { UsageGuidelineService } from "./usageGuideline.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UsageGuideline)
export class UsageGuidelineResolver extends UsageGuidelineResolverBase {
  constructor(
    protected readonly service: UsageGuidelineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
