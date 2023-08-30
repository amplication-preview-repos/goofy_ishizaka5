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
import { Bid } from "../../bid/base/Bid";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsDate,
  IsInt,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Job } from "../../job/base/Job";
import { Message } from "../../message/base/Message";
import { Review } from "../../review/base/Review";
import { EnumUser1Role } from "./EnumUser1Role";
import { Skill } from "../../skill/base/Skill";
import { Transaction } from "../../transaction/base/Transaction";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";

@ObjectType()
class User1 {
  @ApiProperty({
    required: false,
    type: () => [Bid],
  })
  @ValidateNested()
  @Type(() => Bid)
  @IsOptional()
  bids?: Array<Bid>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bio!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: false,
    type: () => [Job],
  })
  @ValidateNested()
  @Type(() => Job)
  @IsOptional()
  jobs?: Array<Job>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  profileImage!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Message],
  })
  @ValidateNested()
  @Type(() => Message)
  @IsOptional()
  receivedMessages?: Array<Message>;

  @ApiProperty({
    required: false,
    type: () => [Review],
  })
  @ValidateNested()
  @Type(() => Review)
  @IsOptional()
  reviewsAsClient?: Array<Review>;

  @ApiProperty({
    required: false,
    type: () => [Review],
  })
  @ValidateNested()
  @Type(() => Review)
  @IsOptional()
  reviewsAsFreelancer?: Array<Review>;

  @ApiProperty({
    required: true,
    enum: EnumUser1Role,
  })
  @IsEnum(EnumUser1Role)
  @Field(() => EnumUser1Role, {
    nullable: true,
  })
  role?: "CLIENT" | "FREELANCER";

  @ApiProperty({
    required: false,
    type: () => [Message],
  })
  @ValidateNested()
  @Type(() => Message)
  @IsOptional()
  sentMessages?: Array<Message>;

  @ApiProperty({
    required: true,
    type: () => [Skill],
  })
  @ValidateNested()
  @Type(() => Skill)
  @IsOptional()
  skills?: Array<Skill>;

  @ApiProperty({
    required: false,
    type: () => [Transaction],
  })
  @ValidateNested()
  @Type(() => Transaction)
  @IsOptional()
  transactionsAsClient?: Array<Transaction>;

  @ApiProperty({
    required: false,
    type: () => [Transaction],
  })
  @ValidateNested()
  @Type(() => Transaction)
  @IsOptional()
  transactionsAsFreelancer?: Array<Transaction>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: JsonValue;
}

export { User1 as User1 };
