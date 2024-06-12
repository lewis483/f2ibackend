import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FarmProduceResolverBase } from "./base/farmProduce.resolver.base";
import { FarmProduce } from "./base/FarmProduce";
import { FarmProduceService } from "./farmProduce.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FarmProduce)
export class FarmProduceResolver extends FarmProduceResolverBase {
  constructor(
    protected readonly service: FarmProduceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
