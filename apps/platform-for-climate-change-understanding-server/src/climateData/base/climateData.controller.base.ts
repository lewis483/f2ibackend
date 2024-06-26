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
import { ClimateDataService } from "../climateData.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ClimateDataCreateInput } from "./ClimateDataCreateInput";
import { ClimateData } from "./ClimateData";
import { ClimateDataFindManyArgs } from "./ClimateDataFindManyArgs";
import { ClimateDataWhereUniqueInput } from "./ClimateDataWhereUniqueInput";
import { ClimateDataUpdateInput } from "./ClimateDataUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ClimateDataControllerBase {
  constructor(
    protected readonly service: ClimateDataService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ClimateData })
  @nestAccessControl.UseRoles({
    resource: "ClimateData",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createClimateData(
    @common.Body() data: ClimateDataCreateInput
  ): Promise<ClimateData> {
    return await this.service.createClimateData({
      data: data,
      select: {
        createdAt: true,
        dataName: true,
        details: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ClimateData] })
  @ApiNestedQuery(ClimateDataFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ClimateData",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async climateDataItems(
    @common.Req() request: Request
  ): Promise<ClimateData[]> {
    const args = plainToClass(ClimateDataFindManyArgs, request.query);
    return this.service.climateDataItems({
      ...args,
      select: {
        createdAt: true,
        dataName: true,
        details: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ClimateData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ClimateData",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async climateData(
    @common.Param() params: ClimateDataWhereUniqueInput
  ): Promise<ClimateData | null> {
    const result = await this.service.climateData({
      where: params,
      select: {
        createdAt: true,
        dataName: true,
        details: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: ClimateData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ClimateData",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateClimateData(
    @common.Param() params: ClimateDataWhereUniqueInput,
    @common.Body() data: ClimateDataUpdateInput
  ): Promise<ClimateData | null> {
    try {
      return await this.service.updateClimateData({
        where: params,
        data: data,
        select: {
          createdAt: true,
          dataName: true,
          details: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: ClimateData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ClimateData",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteClimateData(
    @common.Param() params: ClimateDataWhereUniqueInput
  ): Promise<ClimateData | null> {
    try {
      return await this.service.deleteClimateData({
        where: params,
        select: {
          createdAt: true,
          dataName: true,
          details: true,
          id: true,
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
