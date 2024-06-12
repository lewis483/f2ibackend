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
import { UsageGuideline } from "./UsageGuideline";
import { UsageGuidelineCountArgs } from "./UsageGuidelineCountArgs";
import { UsageGuidelineFindManyArgs } from "./UsageGuidelineFindManyArgs";
import { UsageGuidelineFindUniqueArgs } from "./UsageGuidelineFindUniqueArgs";
import { CreateUsageGuidelineArgs } from "./CreateUsageGuidelineArgs";
import { UpdateUsageGuidelineArgs } from "./UpdateUsageGuidelineArgs";
import { DeleteUsageGuidelineArgs } from "./DeleteUsageGuidelineArgs";
import { UsageGuidelineService } from "../usageGuideline.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UsageGuideline)
export class UsageGuidelineResolverBase {
  constructor(
    protected readonly service: UsageGuidelineService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UsageGuideline",
    action: "read",
    possession: "any",
  })
  async _usageGuidelinesMeta(
    @graphql.Args() args: UsageGuidelineCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UsageGuideline])
  @nestAccessControl.UseRoles({
    resource: "UsageGuideline",
    action: "read",
    possession: "any",
  })
  async usageGuidelines(
    @graphql.Args() args: UsageGuidelineFindManyArgs
  ): Promise<UsageGuideline[]> {
    return this.service.usageGuidelines(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UsageGuideline, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UsageGuideline",
    action: "read",
    possession: "own",
  })
  async usageGuideline(
    @graphql.Args() args: UsageGuidelineFindUniqueArgs
  ): Promise<UsageGuideline | null> {
    const result = await this.service.usageGuideline(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UsageGuideline)
  @nestAccessControl.UseRoles({
    resource: "UsageGuideline",
    action: "create",
    possession: "any",
  })
  async createUsageGuideline(
    @graphql.Args() args: CreateUsageGuidelineArgs
  ): Promise<UsageGuideline> {
    return await this.service.createUsageGuideline({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UsageGuideline)
  @nestAccessControl.UseRoles({
    resource: "UsageGuideline",
    action: "update",
    possession: "any",
  })
  async updateUsageGuideline(
    @graphql.Args() args: UpdateUsageGuidelineArgs
  ): Promise<UsageGuideline | null> {
    try {
      return await this.service.updateUsageGuideline({
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

  @graphql.Mutation(() => UsageGuideline)
  @nestAccessControl.UseRoles({
    resource: "UsageGuideline",
    action: "delete",
    possession: "any",
  })
  async deleteUsageGuideline(
    @graphql.Args() args: DeleteUsageGuidelineArgs
  ): Promise<UsageGuideline | null> {
    try {
      return await this.service.deleteUsageGuideline(args);
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
