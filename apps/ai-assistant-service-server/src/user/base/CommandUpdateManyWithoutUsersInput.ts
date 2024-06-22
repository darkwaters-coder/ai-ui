/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CommandWhereUniqueInput } from "../../command/base/CommandWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CommandUpdateManyWithoutUsersInput {
  @Field(() => [CommandWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommandWhereUniqueInput],
  })
  connect?: Array<CommandWhereUniqueInput>;

  @Field(() => [CommandWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommandWhereUniqueInput],
  })
  disconnect?: Array<CommandWhereUniqueInput>;

  @Field(() => [CommandWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommandWhereUniqueInput],
  })
  set?: Array<CommandWhereUniqueInput>;
}

export { CommandUpdateManyWithoutUsersInput as CommandUpdateManyWithoutUsersInput };
