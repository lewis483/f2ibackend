/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FarmerService } from "../farmer.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FarmerCreateInput } from "./FarmerCreateInput";
import { Farmer } from "./Farmer";
import { FarmerFindManyArgs } from "./FarmerFindManyArgs";
import { FarmerWhereUniqueInput } from "./FarmerWhereUniqueInput";
import { FarmerUpdateInput } from "./FarmerUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FarmerControllerBase {
  constructor(
    protected readonly service: FarmerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Farmer })
  @nestAccessControl.UseRoles({
    resource: "Farmer",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFarmer(@common.Body() data: FarmerCreateInput): Promise<Farmer> {
    return await this.service.createFarmer({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Farmer] })
  @ApiNestedQuery(FarmerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Farmer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async farmers(@common.Req() request: Request): Promise<Farmer[]> {
    const args = plainToClass(FarmerFindManyArgs, request.query);
    return this.service.farmers({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Farmer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Farmer",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async farmer(
    @common.Param() params: FarmerWhereUniqueInput
  ): Promise<Farmer | null> {
    const result = await this.service.farmer({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Farmer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Farmer",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFarmer(
    @common.Param() params: FarmerWhereUniqueInput,
    @common.Body() data: FarmerUpdateInput
  ): Promise<Farmer | null> {
    try {
      return await this.service.updateFarmer({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Farmer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Farmer",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFarmer(
    @common.Param() params: FarmerWhereUniqueInput
  ): Promise<Farmer | null> {
    try {
      return await this.service.deleteFarmer({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
