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
import { UsageGuidelineWhereInput } from "./UsageGuidelineWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UsageGuidelineListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UsageGuidelineWhereInput,
  })
  @ValidateNested()
  @Type(() => UsageGuidelineWhereInput)
  @IsOptional()
  @Field(() => UsageGuidelineWhereInput, {
    nullable: true,
  })
  every?: UsageGuidelineWhereInput;

  @ApiProperty({
    required: false,
    type: () => UsageGuidelineWhereInput,
  })
  @ValidateNested()
  @Type(() => UsageGuidelineWhereInput)
  @IsOptional()
  @Field(() => UsageGuidelineWhereInput, {
    nullable: true,
  })
  some?: UsageGuidelineWhereInput;

  @ApiProperty({
    required: false,
    type: () => UsageGuidelineWhereInput,
  })
  @ValidateNested()
  @Type(() => UsageGuidelineWhereInput)
  @IsOptional()
  @Field(() => UsageGuidelineWhereInput, {
    nullable: true,
  })
  none?: UsageGuidelineWhereInput;
}
export { UsageGuidelineListRelationFilter as UsageGuidelineListRelationFilter };
