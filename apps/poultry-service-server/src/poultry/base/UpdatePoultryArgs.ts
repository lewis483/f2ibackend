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
import { PoultryWhereUniqueInput } from "./PoultryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PoultryUpdateInput } from "./PoultryUpdateInput";

@ArgsType()
class UpdatePoultryArgs {
  @ApiProperty({
    required: true,
    type: () => PoultryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PoultryWhereUniqueInput)
  @Field(() => PoultryWhereUniqueInput, { nullable: false })
  where!: PoultryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PoultryUpdateInput,
  })
  @ValidateNested()
  @Type(() => PoultryUpdateInput)
  @Field(() => PoultryUpdateInput, { nullable: false })
  data!: PoultryUpdateInput;
}

export { UpdatePoultryArgs as UpdatePoultryArgs };
