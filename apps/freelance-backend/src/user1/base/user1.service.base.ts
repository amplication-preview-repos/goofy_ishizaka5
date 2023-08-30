/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  User1,
  Bid,
  Job,
  Message,
  Review,
  Skill,
  Transaction,
} from "@prisma/client";
import { PasswordService } from "../../auth/password.service";
import { transformStringFieldUpdateInput } from "../../prisma.util";

export class User1ServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {}

  async count<T extends Prisma.User1CountArgs>(
    args: Prisma.SelectSubset<T, Prisma.User1CountArgs>
  ): Promise<number> {
    return this.prisma.user1.count(args);
  }

  async findMany<T extends Prisma.User1FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.User1FindManyArgs>
  ): Promise<User1[]> {
    return this.prisma.user1.findMany(args);
  }
  async findOne<T extends Prisma.User1FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.User1FindUniqueArgs>
  ): Promise<User1 | null> {
    return this.prisma.user1.findUnique(args);
  }
  async create<T extends Prisma.User1CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.User1CreateArgs>
  ): Promise<User1> {
    return this.prisma.user1.create<T>({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
  async update<T extends Prisma.User1UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.User1UpdateArgs>
  ): Promise<User1> {
    return this.prisma.user1.update<T>({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async delete<T extends Prisma.User1DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.User1DeleteArgs>
  ): Promise<User1> {
    return this.prisma.user1.delete(args);
  }

  async findBids(
    parentId: number,
    args: Prisma.BidFindManyArgs
  ): Promise<Bid[]> {
    return this.prisma.user1
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .bids(args);
  }

  async findJobs(
    parentId: number,
    args: Prisma.JobFindManyArgs
  ): Promise<Job[]> {
    return this.prisma.user1
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .jobs(args);
  }

  async findReceivedMessages(
    parentId: number,
    args: Prisma.MessageFindManyArgs
  ): Promise<Message[]> {
    return this.prisma.user1
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .receivedMessages(args);
  }

  async findReviewsAsClient(
    parentId: number,
    args: Prisma.ReviewFindManyArgs
  ): Promise<Review[]> {
    return this.prisma.user1
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reviewsAsClient(args);
  }

  async findReviewsAsFreelancer(
    parentId: number,
    args: Prisma.ReviewFindManyArgs
  ): Promise<Review[]> {
    return this.prisma.user1
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reviewsAsFreelancer(args);
  }

  async findSentMessages(
    parentId: number,
    args: Prisma.MessageFindManyArgs
  ): Promise<Message[]> {
    return this.prisma.user1
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .sentMessages(args);
  }

  async findSkills(
    parentId: number,
    args: Prisma.SkillFindManyArgs
  ): Promise<Skill[]> {
    return this.prisma.user1
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .skills(args);
  }

  async findTransactionsAsClient(
    parentId: number,
    args: Prisma.TransactionFindManyArgs
  ): Promise<Transaction[]> {
    return this.prisma.user1
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .transactionsAsClient(args);
  }

  async findTransactionsAsFreelancer(
    parentId: number,
    args: Prisma.TransactionFindManyArgs
  ): Promise<Transaction[]> {
    return this.prisma.user1
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .transactionsAsFreelancer(args);
  }
}
