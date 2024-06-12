import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FertilizerResolverBase } from "./base/fertilizer.resolver.base";
import { Fertilizer } from "./base/Fertilizer";
import { FertilizerService } from "./fertilizer.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Fertilizer)
export class FertilizerResolver extends FertilizerResolverBase {
  constructor(
    protected readonly service: FertilizerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
