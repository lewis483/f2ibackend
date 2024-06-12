import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InsecticideResolverBase } from "./base/insecticide.resolver.base";
import { Insecticide } from "./base/Insecticide";
import { InsecticideService } from "./insecticide.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Insecticide)
export class InsecticideResolver extends InsecticideResolverBase {
  constructor(
    protected readonly service: InsecticideService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
