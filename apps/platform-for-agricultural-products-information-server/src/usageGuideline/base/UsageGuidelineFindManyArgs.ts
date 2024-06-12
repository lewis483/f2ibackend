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
import { UsageGuidelineWhereInput } from "./UsageGuidelineWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UsageGuidelineOrderByInput } from "./UsageGuidelineOrderByInput";

@ArgsType()
class UsageGuidelineFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UsageGuidelineWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UsageGuidelineWhereInput, { nullable: true })
  @Type(() => UsageGuidelineWhereInput)
  where?: UsageGuidelineWhereInput;

  @ApiProperty({
    required: false,
    type: [UsageGuidelineOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UsageGuidelineOrderByInput], { nullable: true })
  @Type(() => UsageGuidelineOrderByInput)
  orderBy?: Array<UsageGuidelineOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UsageGuidelineFindManyArgs as UsageGuidelineFindManyArgs };
