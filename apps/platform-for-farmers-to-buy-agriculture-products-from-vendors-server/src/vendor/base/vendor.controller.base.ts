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
import { VendorService } from "../vendor.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VendorCreateInput } from "./VendorCreateInput";
import { Vendor } from "./Vendor";
import { VendorFindManyArgs } from "./VendorFindManyArgs";
import { VendorWhereUniqueInput } from "./VendorWhereUniqueInput";
import { VendorUpdateInput } from "./VendorUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VendorControllerBase {
  constructor(
    protected readonly service: VendorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Vendor })
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createVendor(@common.Body() data: VendorCreateInput): Promise<Vendor> {
    return await this.service.createVendor({
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
  @swagger.ApiOkResponse({ type: [Vendor] })
  @ApiNestedQuery(VendorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async vendors(@common.Req() request: Request): Promise<Vendor[]> {
    const args = plainToClass(VendorFindManyArgs, request.query);
    return this.service.vendors({
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
  @swagger.ApiOkResponse({ type: Vendor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async vendor(
    @common.Param() params: VendorWhereUniqueInput
  ): Promise<Vendor | null> {
    const result = await this.service.vendor({
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
  @swagger.ApiOkResponse({ type: Vendor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateVendor(
    @common.Param() params: VendorWhereUniqueInput,
    @common.Body() data: VendorUpdateInput
  ): Promise<Vendor | null> {
    try {
      return await this.service.updateVendor({
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
  @swagger.ApiOkResponse({ type: Vendor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteVendor(
    @common.Param() params: VendorWhereUniqueInput
  ): Promise<Vendor | null> {
    try {
      return await this.service.deleteVendor({
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