/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateUser1Args } from "./CreateUser1Args";
import { UpdateUser1Args } from "./UpdateUser1Args";
import { DeleteUser1Args } from "./DeleteUser1Args";
import { User1CountArgs } from "./User1CountArgs";
import { User1FindManyArgs } from "./User1FindManyArgs";
import { User1FindUniqueArgs } from "./User1FindUniqueArgs";
import { User1 } from "./User1";
import { BidFindManyArgs } from "../../bid/base/BidFindManyArgs";
import { Bid } from "../../bid/base/Bid";
import { JobFindManyArgs } from "../../job/base/JobFindManyArgs";
import { Job } from "../../job/base/Job";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { SkillFindManyArgs } from "../../skill/base/SkillFindManyArgs";
import { Skill } from "../../skill/base/Skill";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { User1Service } from "../user1.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => User1)
export class User1ResolverBase {
  constructor(
    protected readonly service: User1Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "User1",
    action: "read",
    possession: "any",
  })
  async _user1sMeta(
    @graphql.Args() args: User1CountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [User1])
  @nestAccessControl.UseRoles({
    resource: "User1",
    action: "read",
    possession: "any",
  })
  async user1s(@graphql.Args() args: User1FindManyArgs): Promise<User1[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => User1, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User1",
    action: "read",
    possession: "own",
  })
  async user1(
    @graphql.Args() args: User1FindUniqueArgs
  ): Promise<User1 | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User1)
  @nestAccessControl.UseRoles({
    resource: "User1",
    action: "create",
    possession: "any",
  })
  async createUser1(@graphql.Args() args: CreateUser1Args): Promise<User1> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User1)
  @nestAccessControl.UseRoles({
    resource: "User1",
    action: "update",
    possession: "any",
  })
  async updateUser1(
    @graphql.Args() args: UpdateUser1Args
  ): Promise<User1 | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => User1)
  @nestAccessControl.UseRoles({
    resource: "User1",
    action: "delete",
    possession: "any",
  })
  async deleteUser1(
    @graphql.Args() args: DeleteUser1Args
  ): Promise<User1 | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Bid], { name: "bids" })
  @nestAccessControl.UseRoles({
    resource: "Bid",
    action: "read",
    possession: "any",
  })
  async resolveFieldBids(
    @graphql.Parent() parent: User1,
    @graphql.Args() args: BidFindManyArgs
  ): Promise<Bid[]> {
    const results = await this.service.findBids(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Job], { name: "jobs" })
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "read",
    possession: "any",
  })
  async resolveFieldJobs(
    @graphql.Parent() parent: User1,
    @graphql.Args() args: JobFindManyArgs
  ): Promise<Job[]> {
    const results = await this.service.findJobs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Message], { name: "receivedMessages" })
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  async resolveFieldReceivedMessages(
    @graphql.Parent() parent: User1,
    @graphql.Args() args: MessageFindManyArgs
  ): Promise<Message[]> {
    const results = await this.service.findReceivedMessages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Review], { name: "reviewsAsClient" })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async resolveFieldReviewsAsClient(
    @graphql.Parent() parent: User1,
    @graphql.Args() args: ReviewFindManyArgs
  ): Promise<Review[]> {
    const results = await this.service.findReviewsAsClient(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Review], { name: "reviewsAsFreelancer" })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async resolveFieldReviewsAsFreelancer(
    @graphql.Parent() parent: User1,
    @graphql.Args() args: ReviewFindManyArgs
  ): Promise<Review[]> {
    const results = await this.service.findReviewsAsFreelancer(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Message], { name: "sentMessages" })
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  async resolveFieldSentMessages(
    @graphql.Parent() parent: User1,
    @graphql.Args() args: MessageFindManyArgs
  ): Promise<Message[]> {
    const results = await this.service.findSentMessages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Skill], { name: "skills" })
  @nestAccessControl.UseRoles({
    resource: "Skill",
    action: "read",
    possession: "any",
  })
  async resolveFieldSkills(
    @graphql.Parent() parent: User1,
    @graphql.Args() args: SkillFindManyArgs
  ): Promise<Skill[]> {
    const results = await this.service.findSkills(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Transaction], { name: "transactionsAsClient" })
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async resolveFieldTransactionsAsClient(
    @graphql.Parent() parent: User1,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactionsAsClient(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Transaction], {
    name: "transactionsAsFreelancer",
  })
  @nestAccessControl.UseRoles({
    resource: "Transaction",
    action: "read",
    possession: "any",
  })
  async resolveFieldTransactionsAsFreelancer(
    @graphql.Parent() parent: User1,
    @graphql.Args() args: TransactionFindManyArgs
  ): Promise<Transaction[]> {
    const results = await this.service.findTransactionsAsFreelancer(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }
}
