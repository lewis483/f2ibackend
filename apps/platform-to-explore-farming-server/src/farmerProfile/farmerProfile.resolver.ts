import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FarmerProfileResolverBase } from "./base/farmerProfile.resolver.base";
import { FarmerProfile } from "./base/FarmerProfile";
import { FarmerProfileService } from "./farmerProfile.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FarmerProfile)
export class FarmerProfileResolver extends FarmerProfileResolverBase {
  constructor(
    protected readonly service: FarmerProfileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
