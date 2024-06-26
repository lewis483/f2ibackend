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
import { FertilizerWhereInput } from "./FertilizerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FertilizerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FertilizerWhereInput,
  })
  @ValidateNested()
  @Type(() => FertilizerWhereInput)
  @IsOptional()
  @Field(() => FertilizerWhereInput, {
    nullable: true,
  })
  every?: FertilizerWhereInput;

  @ApiProperty({
    required: false,
    type: () => FertilizerWhereInput,
  })
  @ValidateNested()
  @Type(() => FertilizerWhereInput)
  @IsOptional()
  @Field(() => FertilizerWhereInput, {
    nullable: true,
  })
  some?: FertilizerWhereInput;

  @ApiProperty({
    required: false,
    type: () => FertilizerWhereInput,
  })
  @ValidateNested()
  @Type(() => FertilizerWhereInput)
  @IsOptional()
  @Field(() => FertilizerWhereInput, {
    nullable: true,
  })
  none?: FertilizerWhereInput;
}
export { FertilizerListRelationFilter as FertilizerListRelationFilter };
