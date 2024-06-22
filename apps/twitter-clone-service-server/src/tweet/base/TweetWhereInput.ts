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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { LikeListRelationFilter } from "../../like/base/LikeListRelationFilter";
import { RetweetListRelationFilter } from "../../retweet/base/RetweetListRelationFilter";

@InputType()
class TweetWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  author?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  likeCount?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => LikeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LikeListRelationFilter)
  @IsOptional()
  @Field(() => LikeListRelationFilter, {
    nullable: true,
  })
  likes?: LikeListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  message?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RetweetListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RetweetListRelationFilter)
  @IsOptional()
  @Field(() => RetweetListRelationFilter, {
    nullable: true,
  })
  retweets?: RetweetListRelationFilter;
}

export { TweetWhereInput as TweetWhereInput };
