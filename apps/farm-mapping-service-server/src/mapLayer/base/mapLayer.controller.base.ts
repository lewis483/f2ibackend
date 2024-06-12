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
import { MapLayerService } from "../mapLayer.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MapLayerCreateInput } from "./MapLayerCreateInput";
import { MapLayer } from "./MapLayer";
import { MapLayerFindManyArgs } from "./MapLayerFindManyArgs";
import { MapLayerWhereUniqueInput } from "./MapLayerWhereUniqueInput";
import { MapLayerUpdateInput } from "./MapLayerUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MapLayerControllerBase {
  constructor(
    protected readonly service: MapLayerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MapLayer })
  @nestAccessControl.UseRoles({
    resource: "MapLayer",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMapLayer(
    @common.Body() data: MapLayerCreateInput
  ): Promise<MapLayer> {
    return await this.service.createMapLayer({
      data: data,
      select: {
        createdAt: true,
        id: true,
        layerDetails: true,
        layerName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MapLayer] })
  @ApiNestedQuery(MapLayerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MapLayer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async mapLayers(@common.Req() request: Request): Promise<MapLayer[]> {
    const args = plainToClass(MapLayerFindManyArgs, request.query);
    return this.service.mapLayers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        layerDetails: true,
        layerName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MapLayer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MapLayer",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async mapLayer(
    @common.Param() params: MapLayerWhereUniqueInput
  ): Promise<MapLayer | null> {
    const result = await this.service.mapLayer({
      where: params,
      select: {
        createdAt: true,
        id: true,
        layerDetails: true,
        layerName: true,
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
  @swagger.ApiOkResponse({ type: MapLayer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MapLayer",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMapLayer(
    @common.Param() params: MapLayerWhereUniqueInput,
    @common.Body() data: MapLayerUpdateInput
  ): Promise<MapLayer | null> {
    try {
      return await this.service.updateMapLayer({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          layerDetails: true,
          layerName: true,
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
  @swagger.ApiOkResponse({ type: MapLayer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MapLayer",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMapLayer(
    @common.Param() params: MapLayerWhereUniqueInput
  ): Promise<MapLayer | null> {
    try {
      return await this.service.deleteMapLayer({
        where: params,
        select: {
          createdAt: true,
          id: true,
          layerDetails: true,
          layerName: true,
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