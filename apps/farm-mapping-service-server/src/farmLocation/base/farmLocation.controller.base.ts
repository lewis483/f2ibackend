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
import { FarmLocationService } from "../farmLocation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FarmLocationCreateInput } from "./FarmLocationCreateInput";
import { FarmLocation } from "./FarmLocation";
import { FarmLocationFindManyArgs } from "./FarmLocationFindManyArgs";
import { FarmLocationWhereUniqueInput } from "./FarmLocationWhereUniqueInput";
import { FarmLocationUpdateInput } from "./FarmLocationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FarmLocationControllerBase {
  constructor(
    protected readonly service: FarmLocationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FarmLocation })
  @nestAccessControl.UseRoles({
    resource: "FarmLocation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFarmLocation(
    @common.Body() data: FarmLocationCreateInput
  ): Promise<FarmLocation> {
    return await this.service.createFarmLocation({
      data: data,
      select: {
        coordinates: true,
        createdAt: true,
        id: true,
        locationName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [FarmLocation] })
  @ApiNestedQuery(FarmLocationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FarmLocation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async farmLocations(@common.Req() request: Request): Promise<FarmLocation[]> {
    const args = plainToClass(FarmLocationFindManyArgs, request.query);
    return this.service.farmLocations({
      ...args,
      select: {
        coordinates: true,
        createdAt: true,
        id: true,
        locationName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FarmLocation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FarmLocation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async farmLocation(
    @common.Param() params: FarmLocationWhereUniqueInput
  ): Promise<FarmLocation | null> {
    const result = await this.service.farmLocation({
      where: params,
      select: {
        coordinates: true,
        createdAt: true,
        id: true,
        locationName: true,
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
  @swagger.ApiOkResponse({ type: FarmLocation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FarmLocation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFarmLocation(
    @common.Param() params: FarmLocationWhereUniqueInput,
    @common.Body() data: FarmLocationUpdateInput
  ): Promise<FarmLocation | null> {
    try {
      return await this.service.updateFarmLocation({
        where: params,
        data: data,
        select: {
          coordinates: true,
          createdAt: true,
          id: true,
          locationName: true,
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
  @swagger.ApiOkResponse({ type: FarmLocation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FarmLocation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFarmLocation(
    @common.Param() params: FarmLocationWhereUniqueInput
  ): Promise<FarmLocation | null> {
    try {
      return await this.service.deleteFarmLocation({
        where: params,
        select: {
          coordinates: true,
          createdAt: true,
          id: true,
          locationName: true,
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
