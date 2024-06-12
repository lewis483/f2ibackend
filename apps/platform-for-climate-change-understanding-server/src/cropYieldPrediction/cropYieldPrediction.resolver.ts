import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CropYieldPredictionResolverBase } from "./base/cropYieldPrediction.resolver.base";
import { CropYieldPrediction } from "./base/CropYieldPrediction";
import { CropYieldPredictionService } from "./cropYieldPrediction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CropYieldPrediction)
export class CropYieldPredictionResolver extends CropYieldPredictionResolverBase {
  constructor(
    protected readonly service: CropYieldPredictionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
