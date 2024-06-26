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
import { FarmerProfile } from "./FarmerProfile";
import { FarmerProfileCountArgs } from "./FarmerProfileCountArgs";
import { FarmerProfileFindManyArgs } from "./FarmerProfileFindManyArgs";
import { FarmerProfileFindUniqueArgs } from "./FarmerProfileFindUniqueArgs";
import { CreateFarmerProfileArgs } from "./CreateFarmerProfileArgs";
import { UpdateFarmerProfileArgs } from "./UpdateFarmerProfileArgs";
import { DeleteFarmerProfileArgs } from "./DeleteFarmerProfileArgs";
import { FarmerProfileService } from "../farmerProfile.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FarmerProfile)
export class FarmerProfileResolverBase {
  constructor(
    protected readonly service: FarmerProfileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FarmerProfile",
    action: "read",
    possession: "any",
  })
  async _farmerProfilesMeta(
    @graphql.Args() args: FarmerProfileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FarmerProfile])
  @nestAccessControl.UseRoles({
    resource: "FarmerProfile",
    action: "read",
    possession: "any",
  })
  async farmerProfiles(
    @graphql.Args() args: FarmerProfileFindManyArgs
  ): Promise<FarmerProfile[]> {
    return this.service.farmerProfiles(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FarmerProfile, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FarmerProfile",
    action: "read",
    possession: "own",
  })
  async farmerProfile(
    @graphql.Args() args: FarmerProfileFindUniqueArgs
  ): Promise<FarmerProfile | null> {
    const result = await this.service.farmerProfile(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FarmerProfile)
  @nestAccessControl.UseRoles({
    resource: "FarmerProfile",
    action: "create",
    possession: "any",
  })
  async createFarmerProfile(
    @graphql.Args() args: CreateFarmerProfileArgs
  ): Promise<FarmerProfile> {
    return await this.service.createFarmerProfile({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FarmerProfile)
  @nestAccessControl.UseRoles({
    resource: "FarmerProfile",
    action: "update",
    possession: "any",
  })
  async updateFarmerProfile(
    @graphql.Args() args: UpdateFarmerProfileArgs
  ): Promise<FarmerProfile | null> {
    try {
      return await this.service.updateFarmerProfile({
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

  @graphql.Mutation(() => FarmerProfile)
  @nestAccessControl.UseRoles({
    resource: "FarmerProfile",
    action: "delete",
    possession: "any",
  })
  async deleteFarmerProfile(
    @graphql.Args() args: DeleteFarmerProfileArgs
  ): Promise<FarmerProfile | null> {
    try {
      return await this.service.deleteFarmerProfile(args);
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
