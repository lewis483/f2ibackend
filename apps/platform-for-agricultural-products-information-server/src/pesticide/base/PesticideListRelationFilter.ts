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
import { PesticideWhereInput } from "./PesticideWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PesticideListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PesticideWhereInput,
  })
  @ValidateNested()
  @Type(() => PesticideWhereInput)
  @IsOptional()
  @Field(() => PesticideWhereInput, {
    nullable: true,
  })
  every?: PesticideWhereInput;

  @ApiProperty({
    required: false,
    type: () => PesticideWhereInput,
  })
  @ValidateNested()
  @Type(() => PesticideWhereInput)
  @IsOptional()
  @Field(() => PesticideWhereInput, {
    nullable: true,
  })
  some?: PesticideWhereInput;

  @ApiProperty({
    required: false,
    type: () => PesticideWhereInput,
  })
  @ValidateNested()
  @Type(() => PesticideWhereInput)
  @IsOptional()
  @Field(() => PesticideWhereInput, {
    nullable: true,
  })
  none?: PesticideWhereInput;
}
export { PesticideListRelationFilter as PesticideListRelationFilter };
