/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt, ValidateNested, IsDate } from "class-validator";
import { User1 } from "../../user1/base/User1";
import { Type } from "class-transformer";

@ObjectType()
class Message {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  content!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: () => User1,
  })
  @ValidateNested()
  @Type(() => User1)
  receiver?: User1;

  @ApiProperty({
    required: true,
    type: () => User1,
  })
  @ValidateNested()
  @Type(() => User1)
  sender?: User1;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  sentAt!: Date;
}

export { Message as Message };
