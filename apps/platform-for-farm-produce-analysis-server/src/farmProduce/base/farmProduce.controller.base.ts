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
import { FarmProduceService } from "../farmProduce.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FarmProduceCreateInput } from "./FarmProduceCreateInput";
import { FarmProduce } from "./FarmProduce";
import { FarmProduceFindManyArgs } from "./FarmProduceFindManyArgs";
import { FarmProduceWhereUniqueInput } from "./FarmProduceWhereUniqueInput";
import { FarmProduceUpdateInput } from "./FarmProduceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FarmProduceControllerBase {
  constructor(
    protected readonly service: FarmProduceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FarmProduce })
  @nestAccessControl.UseRoles({
    resource: "FarmProduce",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFarmProduce(
    @common.Body() data: FarmProduceCreateInput
  ): Promise<FarmProduce> {
    return await this.service.createFarmProduce({
      data: data,
      select: {
        createdAt: true,
        id: true,
        produceName: true,
        quantity: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [FarmProduce] })
  @ApiNestedQuery(FarmProduceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FarmProduce",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async farmProduces(@common.Req() request: Request): Promise<FarmProduce[]> {
    const args = plainToClass(FarmProduceFindManyArgs, request.query);
    return this.service.farmProduces({
      ...args,
      select: {
        createdAt: true,
        id: true,
        produceName: true,
        quantity: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FarmProduce })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FarmProduce",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async farmProduce(
    @common.Param() params: FarmProduceWhereUniqueInput
  ): Promise<FarmProduce | null> {
    const result = await this.service.farmProduce({
      where: params,
      select: {
        createdAt: true,
        id: true,
        produceName: true,
        quantity: true,
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
  @swagger.ApiOkResponse({ type: FarmProduce })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FarmProduce",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFarmProduce(
    @common.Param() params: FarmProduceWhereUniqueInput,
    @common.Body() data: FarmProduceUpdateInput
  ): Promise<FarmProduce | null> {
    try {
      return await this.service.updateFarmProduce({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          produceName: true,
          quantity: true,
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
  @swagger.ApiOkResponse({ type: FarmProduce })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FarmProduce",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFarmProduce(
    @common.Param() params: FarmProduceWhereUniqueInput
  ): Promise<FarmProduce | null> {
    try {
      return await this.service.deleteFarmProduce({
        where: params,
        select: {
          createdAt: true,
          id: true,
          produceName: true,
          quantity: true,
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
