/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MessageWhereUniqueInput } from "../../message/base/MessageWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MessageCreateNestedManyWithoutUser1sInput {
  @Field(() => [MessageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MessageWhereUniqueInput],
  })
  connect?: Array<MessageWhereUniqueInput>;
}

export { MessageCreateNestedManyWithoutUser1sInput as MessageCreateNestedManyWithoutUser1sInput };
