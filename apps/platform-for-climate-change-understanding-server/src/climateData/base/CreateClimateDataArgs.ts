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
import { ClimateDataCreateInput } from "./ClimateDataCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateClimateDataArgs {
  @ApiProperty({
    required: true,
    type: () => ClimateDataCreateInput,
  })
  @ValidateNested()
  @Type(() => ClimateDataCreateInput)
  @Field(() => ClimateDataCreateInput, { nullable: false })
  data!: ClimateDataCreateInput;
}

export { CreateClimateDataArgs as CreateClimateDataArgs };
