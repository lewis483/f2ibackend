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
import { CropType } from "./CropType";
import { CropTypeCountArgs } from "./CropTypeCountArgs";
import { CropTypeFindManyArgs } from "./CropTypeFindManyArgs";
import { CropTypeFindUniqueArgs } from "./CropTypeFindUniqueArgs";
import { CreateCropTypeArgs } from "./CreateCropTypeArgs";
import { UpdateCropTypeArgs } from "./UpdateCropTypeArgs";
import { DeleteCropTypeArgs } from "./DeleteCropTypeArgs";
import { CropTypeService } from "../cropType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CropType)
export class CropTypeResolverBase {
  constructor(
    protected readonly service: CropTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CropType",
    action: "read",
    possession: "any",
  })
  async _cropTypesMeta(
    @graphql.Args() args: CropTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CropType])
  @nestAccessControl.UseRoles({
    resource: "CropType",
    action: "read",
    possession: "any",
  })
  async cropTypes(
    @graphql.Args() args: CropTypeFindManyArgs
  ): Promise<CropType[]> {
    return this.service.cropTypes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CropType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CropType",
    action: "read",
    possession: "own",
  })
  async cropType(
    @graphql.Args() args: CropTypeFindUniqueArgs
  ): Promise<CropType | null> {
    const result = await this.service.cropType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CropType)
  @nestAccessControl.UseRoles({
    resource: "CropType",
    action: "create",
    possession: "any",
  })
  async createCropType(
    @graphql.Args() args: CreateCropTypeArgs
  ): Promise<CropType> {
    return await this.service.createCropType({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CropType)
  @nestAccessControl.UseRoles({
    resource: "CropType",
    action: "update",
    possession: "any",
  })
  async updateCropType(
    @graphql.Args() args: UpdateCropTypeArgs
  ): Promise<CropType | null> {
    try {
      return await this.service.updateCropType({
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

  @graphql.Mutation(() => CropType)
  @nestAccessControl.UseRoles({
    resource: "CropType",
    action: "delete",
    possession: "any",
  })
  async deleteCropType(
    @graphql.Args() args: DeleteCropTypeArgs
  ): Promise<CropType | null> {
    try {
      return await this.service.deleteCropType(args);
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