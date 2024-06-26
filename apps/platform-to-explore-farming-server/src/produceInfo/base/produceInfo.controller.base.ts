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
import { ProduceInfoService } from "../produceInfo.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProduceInfoCreateInput } from "./ProduceInfoCreateInput";
import { ProduceInfo } from "./ProduceInfo";
import { ProduceInfoFindManyArgs } from "./ProduceInfoFindManyArgs";
import { ProduceInfoWhereUniqueInput } from "./ProduceInfoWhereUniqueInput";
import { ProduceInfoUpdateInput } from "./ProduceInfoUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProduceInfoControllerBase {
  constructor(
    protected readonly service: ProduceInfoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProduceInfo })
  @nestAccessControl.UseRoles({
    resource: "ProduceInfo",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProduceInfo(
    @common.Body() data: ProduceInfoCreateInput
  ): Promise<ProduceInfo> {
    return await this.service.createProduceInfo({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        produceName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ProduceInfo] })
  @ApiNestedQuery(ProduceInfoFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ProduceInfo",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async produceInfos(@common.Req() request: Request): Promise<ProduceInfo[]> {
    const args = plainToClass(ProduceInfoFindManyArgs, request.query);
    return this.service.produceInfos({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        produceName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProduceInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProduceInfo",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async produceInfo(
    @common.Param() params: ProduceInfoWhereUniqueInput
  ): Promise<ProduceInfo | null> {
    const result = await this.service.produceInfo({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        produceName: true,
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
  @swagger.ApiOkResponse({ type: ProduceInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProduceInfo",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProduceInfo(
    @common.Param() params: ProduceInfoWhereUniqueInput,
    @common.Body() data: ProduceInfoUpdateInput
  ): Promise<ProduceInfo | null> {
    try {
      return await this.service.updateProduceInfo({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          produceName: true,
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
  @swagger.ApiOkResponse({ type: ProduceInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProduceInfo",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProduceInfo(
    @common.Param() params: ProduceInfoWhereUniqueInput
  ): Promise<ProduceInfo | null> {
    try {
      return await this.service.deleteProduceInfo({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          produceName: true,
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
