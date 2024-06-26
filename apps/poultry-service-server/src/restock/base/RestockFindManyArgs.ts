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
import { RestockWhereInput } from "./RestockWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RestockOrderByInput } from "./RestockOrderByInput";

@ArgsType()
class RestockFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RestockWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RestockWhereInput, { nullable: true })
  @Type(() => RestockWhereInput)
  where?: RestockWhereInput;

  @ApiProperty({
    required: false,
    type: [RestockOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RestockOrderByInput], { nullable: true })
  @Type(() => RestockOrderByInput)
  orderBy?: Array<RestockOrderByInput>;

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

export { RestockFindManyArgs as RestockFindManyArgs };
