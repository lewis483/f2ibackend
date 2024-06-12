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
import { ProduceService } from "../produce.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProduceCreateInput } from "./ProduceCreateInput";
import { Produce } from "./Produce";
import { ProduceFindManyArgs } from "./ProduceFindManyArgs";
import { ProduceWhereUniqueInput } from "./ProduceWhereUniqueInput";
import { ProduceUpdateInput } from "./ProduceUpdateInput";
import { PricingFindManyArgs } from "../../pricing/base/PricingFindManyArgs";
import { Pricing } from "../../pricing/base/Pricing";
import { PricingWhereUniqueInput } from "../../pricing/base/PricingWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProduceControllerBase {
  constructor(
    protected readonly service: ProduceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Produce })
  @nestAccessControl.UseRoles({
    resource: "Produce",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProduce(
    @common.Body() data: ProduceCreateInput
  ): Promise<Produce> {
    return await this.service.createProduce({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        quantity: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Produce] })
  @ApiNestedQuery(ProduceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Produce",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async produces(@common.Req() request: Request): Promise<Produce[]> {
    const args = plainToClass(ProduceFindManyArgs, request.query);
    return this.service.produces({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        quantity: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Produce })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Produce",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async produce(
    @common.Param() params: ProduceWhereUniqueInput
  ): Promise<Produce | null> {
    const result = await this.service.produce({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Produce })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Produce",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProduce(
    @common.Param() params: ProduceWhereUniqueInput,
    @common.Body() data: ProduceUpdateInput
  ): Promise<Produce | null> {
    try {
      return await this.service.updateProduce({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Produce })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Produce",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProduce(
    @common.Param() params: ProduceWhereUniqueInput
  ): Promise<Produce | null> {
    try {
      return await this.service.deleteProduce({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/pricings")
  @ApiNestedQuery(PricingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Pricing",
    action: "read",
    possession: "any",
  })
  async findPricings(
    @common.Req() request: Request,
    @common.Param() params: ProduceWhereUniqueInput
  ): Promise<Pricing[]> {
    const query = plainToClass(PricingFindManyArgs, request.query);
    const results = await this.service.findPricings(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/pricings")
  @nestAccessControl.UseRoles({
    resource: "Produce",
    action: "update",
    possession: "any",
  })
  async connectPricings(
    @common.Param() params: ProduceWhereUniqueInput,
    @common.Body() body: PricingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pricings: {
        connect: body,
      },
    };
    await this.service.updateProduce({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/pricings")
  @nestAccessControl.UseRoles({
    resource: "Produce",
    action: "update",
    possession: "any",
  })
  async updatePricings(
    @common.Param() params: ProduceWhereUniqueInput,
    @common.Body() body: PricingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pricings: {
        set: body,
      },
    };
    await this.service.updateProduce({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/pricings")
  @nestAccessControl.UseRoles({
    resource: "Produce",
    action: "update",
    possession: "any",
  })
  async disconnectPricings(
    @common.Param() params: ProduceWhereUniqueInput,
    @common.Body() body: PricingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      pricings: {
        disconnect: body,
      },
    };
    await this.service.updateProduce({
      where: params,
      data,
      select: { id: true },
    });
  }
}
