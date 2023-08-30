import { Module, Scope, CacheModule } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import * as redisStore from "cache-manager-redis-store";
import { User1Module } from "./user1/user1.module";
import { SkillModule } from "./skill/skill.module";
import { JobModule } from "./job/job.module";
import { BidModule } from "./bid/bid.module";
import { MessageModule } from "./message/message.module";
import { ReviewModule } from "./review/review.module";
import { TransactionModule } from "./transaction/transaction.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { NatsModule } from "./kafka/nats.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    KafkaModule,
    ACLModule,
    AuthModule,
    User1Module,
    SkillModule,
    JobModule,
    BidModule,
    MessageModule,
    ReviewModule,
    TransactionModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      username: process.env.REDIS_USERNAME,
      password: process.env.REDIS_PASSWORD,
      ttl: parseInt(process.env.REDIS_TTL ? process.env.REDIS_TTL : "5"),

      max: parseInt(
        process.env.REDIS_MAX_REQUESTS_CACHED
          ? process.env.REDIS_MAX_REQUESTS_CACHED
          : "100"
      ),
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
