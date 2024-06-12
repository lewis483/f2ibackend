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
import { ProduceWhereInput } from "./ProduceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProduceOrderByInput } from "./ProduceOrderByInput";

@ArgsType()
class ProduceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProduceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProduceWhereInput, { nullable: true })
  @Type(() => ProduceWhereInput)
  where?: ProduceWhereInput;

  @ApiProperty({
    required: false,
    type: [ProduceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProduceOrderByInput], { nullable: true })
  @Type(() => ProduceOrderByInput)
  orderBy?: Array<ProduceOrderByInput>;

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

export { ProduceFindManyArgs as ProduceFindManyArgs };