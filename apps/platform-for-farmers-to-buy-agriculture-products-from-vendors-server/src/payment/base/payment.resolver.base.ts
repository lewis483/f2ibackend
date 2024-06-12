/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Payment } from "./Payment";
import { PaymentCountArgs } from "./PaymentCountArgs";
import { PaymentFindManyArgs } from "./PaymentFindManyArgs";
import { PaymentFindUniqueArgs } from "./PaymentFindUniqueArgs";
import { CreatePaymentArgs } from "./CreatePaymentArgs";
import { UpdatePaymentArgs } from "./UpdatePaymentArgs";
import { DeletePaymentArgs } from "./DeletePaymentArgs";
import { PurchaseOrder } from "../../purchaseOrder/base/PurchaseOrder";
import { PaymentService } from "../payment.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Payment)
export class PaymentResolverBase {
  constructor(
    protected readonly service: PaymentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "read",
    possession: "any",
  })
  async _paymentsMeta(
    @graphql.Args() args: PaymentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Payment])
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "read",
    possession: "any",
  })
  async payments(
    @graphql.Args() args: PaymentFindManyArgs
  ): Promise<Payment[]> {
    return this.service.payments(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Payment, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "read",
    possession: "own",
  })
  async payment(
    @graphql.Args() args: PaymentFindUniqueArgs
  ): Promise<Payment | null> {
    const result = await this.service.payment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Payment)
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "create",
    possession: "any",
  })
  async createPayment(
    @graphql.Args() args: CreatePaymentArgs
  ): Promise<Payment> {
    return await this.service.createPayment({
      ...args,
      data: {
        ...args.data,

        purchaseOrder: args.data.purchaseOrder
          ? {
              connect: args.data.purchaseOrder,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Payment)
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "update",
    possession: "any",
  })
  async updatePayment(
    @graphql.Args() args: UpdatePaymentArgs
  ): Promise<Payment | null> {
    try {
      return await this.service.updatePayment({
        ...args,
        data: {
          ...args.data,

          purchaseOrder: args.data.purchaseOrder
            ? {
                connect: args.data.purchaseOrder,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Payment)
  @nestAccessControl.UseRoles({
    resource: "Payment",
    action: "delete",
    possession: "any",
  })
  async deletePayment(
    @graphql.Args() args: DeletePaymentArgs
  ): Promise<Payment | null> {
    try {
      return await this.service.deletePayment(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => PurchaseOrder, {
    nullable: true,
    name: "purchaseOrder",
  })
  @nestAccessControl.UseRoles({
    resource: "PurchaseOrder",
    action: "read",
    possession: "any",
  })
  async getPurchaseOrder(
    @graphql.Parent() parent: Payment
  ): Promise<PurchaseOrder | null> {
    const result = await this.service.getPurchaseOrder(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
