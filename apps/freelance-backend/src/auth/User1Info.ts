import { Field, ObjectType } from "@nestjs/graphql";
import { User1 } from "../user1/base/User1";

@ObjectType()
export class User1Info implements Partial<User1> {
  @Field(() => Number)
  id!: number;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
