import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProduceInfoResolverBase } from "./base/produceInfo.resolver.base";
import { ProduceInfo } from "./base/ProduceInfo";
import { ProduceInfoService } from "./produceInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProduceInfo)
export class ProduceInfoResolver extends ProduceInfoResolverBase {
  constructor(
    protected readonly service: ProduceInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
