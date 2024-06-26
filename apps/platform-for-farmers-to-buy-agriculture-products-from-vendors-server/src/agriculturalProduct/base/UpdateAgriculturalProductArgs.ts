/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AgriculturalProductWhereUniqueInput } from "./AgriculturalProductWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AgriculturalProductUpdateInput } from "./AgriculturalProductUpdateInput";

@ArgsType()
class UpdateAgriculturalProductArgs {
  @ApiProperty({
    required: true,
    type: () => AgriculturalProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AgriculturalProductWhereUniqueInput)
  @Field(() => AgriculturalProductWhereUniqueInput, { nullable: false })
  where!: AgriculturalProductWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AgriculturalProductUpdateInput,
  })
  @ValidateNested()
  @Type(() => AgriculturalProductUpdateInput)
  @Field(() => AgriculturalProductUpdateInput, { nullable: false })
  data!: AgriculturalProductUpdateInput;
}

export { UpdateAgriculturalProductArgs as UpdateAgriculturalProductArgs };
