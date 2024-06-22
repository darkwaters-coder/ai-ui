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
import { CommandWhereUniqueInput } from "../../command/base/CommandWhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumResponseResponseType } from "./EnumResponseResponseType";

@InputType()
class ResponseUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CommandWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommandWhereUniqueInput)
  @IsOptional()
  @Field(() => CommandWhereUniqueInput, {
    nullable: true,
  })
  command?: CommandWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  responseText?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumResponseResponseType,
  })
  @IsEnum(EnumResponseResponseType)
  @IsOptional()
  @Field(() => EnumResponseResponseType, {
    nullable: true,
  })
  responseType?: "Option1" | null;
}

export { ResponseUpdateInput as ResponseUpdateInput };
