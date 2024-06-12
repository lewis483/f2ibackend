import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AgriculturalProductResolverBase } from "./base/agriculturalProduct.resolver.base";
import { AgriculturalProduct } from "./base/AgriculturalProduct";
import { AgriculturalProductService } from "./agriculturalProduct.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AgriculturalProduct)
export class AgriculturalProductResolver extends AgriculturalProductResolverBase {
  constructor(
    protected readonly service: AgriculturalProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
