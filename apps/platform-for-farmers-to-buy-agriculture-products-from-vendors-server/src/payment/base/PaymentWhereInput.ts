/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PurchaseOrderWhereUniqueInput } from "../../purchaseOrder/base/PurchaseOrderWhereUniqueInput";

@InputType()
class PaymentWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  paymentStatus?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PurchaseOrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PurchaseOrderWhereUniqueInput)
  @IsOptional()
  @Field(() => PurchaseOrderWhereUniqueInput, {
    nullable: true,
  })
  purchaseOrder?: PurchaseOrderWhereUniqueInput;
}

export { PaymentWhereInput as PaymentWhereInput };
