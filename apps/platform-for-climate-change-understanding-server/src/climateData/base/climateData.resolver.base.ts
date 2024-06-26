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
import { ClimateData } from "./ClimateData";
import { ClimateDataCountArgs } from "./ClimateDataCountArgs";
import { ClimateDataFindManyArgs } from "./ClimateDataFindManyArgs";
import { ClimateDataFindUniqueArgs } from "./ClimateDataFindUniqueArgs";
import { CreateClimateDataArgs } from "./CreateClimateDataArgs";
import { UpdateClimateDataArgs } from "./UpdateClimateDataArgs";
import { DeleteClimateDataArgs } from "./DeleteClimateDataArgs";
import { ClimateDataService } from "../climateData.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ClimateData)
export class ClimateDataResolverBase {
  constructor(
    protected readonly service: ClimateDataService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ClimateData",
    action: "read",
    possession: "any",
  })
  async _climateDataItemsMeta(
    @graphql.Args() args: ClimateDataCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ClimateData])
  @nestAccessControl.UseRoles({
    resource: "ClimateData",
    action: "read",
    possession: "any",
  })
  async climateDataItems(
    @graphql.Args() args: ClimateDataFindManyArgs
  ): Promise<ClimateData[]> {
    return this.service.climateDataItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ClimateData, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ClimateData",
    action: "read",
    possession: "own",
  })
  async climateData(
    @graphql.Args() args: ClimateDataFindUniqueArgs
  ): Promise<ClimateData | null> {
    const result = await this.service.climateData(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ClimateData)
  @nestAccessControl.UseRoles({
    resource: "ClimateData",
    action: "create",
    possession: "any",
  })
  async createClimateData(
    @graphql.Args() args: CreateClimateDataArgs
  ): Promise<ClimateData> {
    return await this.service.createClimateData({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ClimateData)
  @nestAccessControl.UseRoles({
    resource: "ClimateData",
    action: "update",
    possession: "any",
  })
  async updateClimateData(
    @graphql.Args() args: UpdateClimateDataArgs
  ): Promise<ClimateData | null> {
    try {
      return await this.service.updateClimateData({
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

  @graphql.Mutation(() => ClimateData)
  @nestAccessControl.UseRoles({
    resource: "ClimateData",
    action: "delete",
    possession: "any",
  })
  async deleteClimateData(
    @graphql.Args() args: DeleteClimateDataArgs
  ): Promise<ClimateData | null> {
    try {
      return await this.service.deleteClimateData(args);
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
