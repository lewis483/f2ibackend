import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FarmLocationResolverBase } from "./base/farmLocation.resolver.base";
import { FarmLocation } from "./base/FarmLocation";
import { FarmLocationService } from "./farmLocation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FarmLocation)
export class FarmLocationResolver extends FarmLocationResolverBase {
  constructor(
    protected readonly service: FarmLocationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
