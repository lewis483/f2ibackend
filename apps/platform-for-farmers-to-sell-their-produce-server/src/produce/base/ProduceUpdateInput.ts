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
import { IsString, IsOptional, ValidateNested, IsInt } from "class-validator";
import { PricingUpdateManyWithoutProducesInput } from "./PricingUpdateManyWithoutProducesInput";
import { Type } from "class-transformer";

@InputType()
class ProduceUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PricingUpdateManyWithoutProducesInput,
  })
  @ValidateNested()
  @Type(() => PricingUpdateManyWithoutProducesInput)
  @IsOptional()
  @Field(() => PricingUpdateManyWithoutProducesInput, {
    nullable: true,
  })
  pricings?: PricingUpdateManyWithoutProducesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;
}

export { ProduceUpdateInput as ProduceUpdateInput };
