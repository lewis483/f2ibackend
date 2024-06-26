/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { FarmLocation } from "./FarmLocation";
import { FarmLocationCountArgs } from "./FarmLocationCountArgs";
import { FarmLocationFindManyArgs } from "./FarmLocationFindManyArgs";
import { FarmLocationFindUniqueArgs } from "./FarmLocationFindUniqueArgs";
import { CreateFarmLocationArgs } from "./CreateFarmLocationArgs";
import { UpdateFarmLocationArgs } from "./UpdateFarmLocationArgs";
import { DeleteFarmLocationArgs } from "./DeleteFarmLocationArgs";
import { FarmLocationService } from "../farmLocation.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FarmLocation)
export class FarmLocationResolverBase {
  constructor(
    protected readonly service: FarmLocationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FarmLocation",
    action: "read",
    possession: "any",
  })
  async _farmLocationsMeta(
    @graphql.Args() args: FarmLocationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FarmLocation])
  @nestAccessControl.UseRoles({
    resource: "FarmLocation",
    action: "read",
    possession: "any",
  })
  async farmLocations(
    @graphql.Args() args: FarmLocationFindManyArgs
  ): Promise<FarmLocation[]> {
    return this.service.farmLocations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FarmLocation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FarmLocation",
    action: "read",
    possession: "own",
  })
  async farmLocation(
    @graphql.Args() args: FarmLocationFindUniqueArgs
  ): Promise<FarmLocation | null> {
    const result = await this.service.farmLocation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FarmLocation)
  @nestAccessControl.UseRoles({
    resource: "FarmLocation",
    action: "create",
    possession: "any",
  })
  async createFarmLocation(
    @graphql.Args() args: CreateFarmLocationArgs
  ): Promise<FarmLocation> {
    return await this.service.createFarmLocation({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FarmLocation)
  @nestAccessControl.UseRoles({
    resource: "FarmLocation",
    action: "update",
    possession: "any",
  })
  async updateFarmLocation(
    @graphql.Args() args: UpdateFarmLocationArgs
  ): Promise<FarmLocation | null> {
    try {
      return await this.service.updateFarmLocation({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FarmLocation)
  @nestAccessControl.UseRoles({
    resource: "FarmLocation",
    action: "delete",
    possession: "any",
  })
  async deleteFarmLocation(
    @graphql.Args() args: DeleteFarmLocationArgs
  ): Promise<FarmLocation | null> {
    try {
      return await this.service.deleteFarmLocation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
