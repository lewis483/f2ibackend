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
import { FarmerProfileWhereInput } from "./FarmerProfileWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FarmerProfileOrderByInput } from "./FarmerProfileOrderByInput";

@ArgsType()
class FarmerProfileFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FarmerProfileWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FarmerProfileWhereInput, { nullable: true })
  @Type(() => FarmerProfileWhereInput)
  where?: FarmerProfileWhereInput;

  @ApiProperty({
    required: false,
    type: [FarmerProfileOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FarmerProfileOrderByInput], { nullable: true })
  @Type(() => FarmerProfileOrderByInput)
  orderBy?: Array<FarmerProfileOrderByInput>;

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

export { FarmerProfileFindManyArgs as FarmerProfileFindManyArgs };
