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
import { PoultryWhereInput } from "./PoultryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PoultryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PoultryWhereInput,
  })
  @ValidateNested()
  @Type(() => PoultryWhereInput)
  @IsOptional()
  @Field(() => PoultryWhereInput, {
    nullable: true,
  })
  every?: PoultryWhereInput;

  @ApiProperty({
    required: false,
    type: () => PoultryWhereInput,
  })
  @ValidateNested()
  @Type(() => PoultryWhereInput)
  @IsOptional()
  @Field(() => PoultryWhereInput, {
    nullable: true,
  })
  some?: PoultryWhereInput;

  @ApiProperty({
    required: false,
    type: () => PoultryWhereInput,
  })
  @ValidateNested()
  @Type(() => PoultryWhereInput)
  @IsOptional()
  @Field(() => PoultryWhereInput, {
    nullable: true,
  })
  none?: PoultryWhereInput;
}
export { PoultryListRelationFilter as PoultryListRelationFilter };
