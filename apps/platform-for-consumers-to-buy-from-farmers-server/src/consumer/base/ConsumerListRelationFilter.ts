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
import { ConsumerWhereInput } from "./ConsumerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ConsumerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ConsumerWhereInput,
  })
  @ValidateNested()
  @Type(() => ConsumerWhereInput)
  @IsOptional()
  @Field(() => ConsumerWhereInput, {
    nullable: true,
  })
  every?: ConsumerWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConsumerWhereInput,
  })
  @ValidateNested()
  @Type(() => ConsumerWhereInput)
  @IsOptional()
  @Field(() => ConsumerWhereInput, {
    nullable: true,
  })
  some?: ConsumerWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConsumerWhereInput,
  })
  @ValidateNested()
  @Type(() => ConsumerWhereInput)
  @IsOptional()
  @Field(() => ConsumerWhereInput, {
    nullable: true,
  })
  none?: ConsumerWhereInput;
}
export { ConsumerListRelationFilter as ConsumerListRelationFilter };
