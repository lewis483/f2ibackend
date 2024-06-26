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
import { PricingService } from "../pricing.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PricingCreateInput } from "./PricingCreateInput";
import { Pricing } from "./Pricing";
import { PricingFindManyArgs } from "./PricingFindManyArgs";
import { PricingWhereUniqueInput } from "./PricingWhereUniqueInput";
import { PricingUpdateInput } from "./PricingUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PricingControllerBase {
  constructor(
    protected readonly service: PricingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Pricing })
  @nestAccessControl.UseRoles({
    resource: "Pricing",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPricing(
    @common.Body() data: PricingCreateInput
  ): Promise<Pricing> {
    return await this.service.createPricing({
      data: {
        ...data,

        produce: data.produce
          ? {
              connect: data.produce,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        pricePerUnit: true,

        produce: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Pricing] })
  @ApiNestedQuery(PricingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Pricing",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async pricings(@common.Req() request: Request): Promise<Pricing[]> {
    const args = plainToClass(PricingFindManyArgs, request.query);
    return this.service.pricings({
      ...args,
      select: {
        createdAt: true,
        id: true,
        pricePerUnit: true,

        produce: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Pricing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Pricing",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async pricing(
    @common.Param() params: PricingWhereUniqueInput
  ): Promise<Pricing | null> {
    const result = await this.service.pricing({
      where: params,
      select: {
        createdAt: true,
        id: true,
        pricePerUnit: true,

        produce: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Pricing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Pricing",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePricing(
    @common.Param() params: PricingWhereUniqueInput,
    @common.Body() data: PricingUpdateInput
  ): Promise<Pricing | null> {
    try {
      return await this.service.updatePricing({
        where: params,
        data: {
          ...data,

          produce: data.produce
            ? {
                connect: data.produce,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          pricePerUnit: true,

          produce: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Pricing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Pricing",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePricing(
    @common.Param() params: PricingWhereUniqueInput
  ): Promise<Pricing | null> {
    try {
      return await this.service.deletePricing({
        where: params,
        select: {
          createdAt: true,
          id: true,
          pricePerUnit: true,

          produce: {
            select: {
              id: true,
            },
          },

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
