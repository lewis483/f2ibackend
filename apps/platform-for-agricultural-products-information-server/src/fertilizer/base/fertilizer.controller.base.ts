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
import { FertilizerService } from "../fertilizer.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FertilizerCreateInput } from "./FertilizerCreateInput";
import { Fertilizer } from "./Fertilizer";
import { FertilizerFindManyArgs } from "./FertilizerFindManyArgs";
import { FertilizerWhereUniqueInput } from "./FertilizerWhereUniqueInput";
import { FertilizerUpdateInput } from "./FertilizerUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FertilizerControllerBase {
  constructor(
    protected readonly service: FertilizerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Fertilizer })
  @nestAccessControl.UseRoles({
    resource: "Fertilizer",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFertilizer(
    @common.Body() data: FertilizerCreateInput
  ): Promise<Fertilizer> {
    return await this.service.createFertilizer({
      data: data,
      select: {
        createdAt: true,
        id: true,
        productName: true,
        updatedAt: true,
        usageDetails: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Fertilizer] })
  @ApiNestedQuery(FertilizerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Fertilizer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async fertilizers(@common.Req() request: Request): Promise<Fertilizer[]> {
    const args = plainToClass(FertilizerFindManyArgs, request.query);
    return this.service.fertilizers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        productName: true,
        updatedAt: true,
        usageDetails: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Fertilizer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Fertilizer",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async fertilizer(
    @common.Param() params: FertilizerWhereUniqueInput
  ): Promise<Fertilizer | null> {
    const result = await this.service.fertilizer({
      where: params,
      select: {
        createdAt: true,
        id: true,
        productName: true,
        updatedAt: true,
        usageDetails: true,
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
  @swagger.ApiOkResponse({ type: Fertilizer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Fertilizer",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFertilizer(
    @common.Param() params: FertilizerWhereUniqueInput,
    @common.Body() data: FertilizerUpdateInput
  ): Promise<Fertilizer | null> {
    try {
      return await this.service.updateFertilizer({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          productName: true,
          updatedAt: true,
          usageDetails: true,
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
  @swagger.ApiOkResponse({ type: Fertilizer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Fertilizer",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFertilizer(
    @common.Param() params: FertilizerWhereUniqueInput
  ): Promise<Fertilizer | null> {
    try {
      return await this.service.deleteFertilizer({
        where: params,
        select: {
          createdAt: true,
          id: true,
          productName: true,
          updatedAt: true,
          usageDetails: true,
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
