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
import { CropTypeWhereUniqueInput } from "./CropTypeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CropTypeUpdateInput } from "./CropTypeUpdateInput";

@ArgsType()
class UpdateCropTypeArgs {
  @ApiProperty({
    required: true,
    type: () => CropTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CropTypeWhereUniqueInput)
  @Field(() => CropTypeWhereUniqueInput, { nullable: false })
  where!: CropTypeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CropTypeUpdateInput,
  })
  @ValidateNested()
  @Type(() => CropTypeUpdateInput)
  @Field(() => CropTypeUpdateInput, { nullable: false })
  data!: CropTypeUpdateInput;
}

export { UpdateCropTypeArgs as UpdateCropTypeArgs };