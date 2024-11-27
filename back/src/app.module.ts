import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { LobbyistsService } from "./lobbyists/lobbyists.service";
import { LobbyistController } from "./lobbyists/lobbyists.controller";
import { ActivitiesRepository } from "./activities/activities.repository";
import { EmailsRepository } from "./emails/emails.repository";
import { LobbyistsRepository } from "./lobbyists/lobbyists.repository";
import { SubscriptionsRepository } from "./subscriptions/subscriptions.repository";
import { UsersRepository } from "./users/users.repository";
import { ConfigModule } from "@nestjs/config";
import { UsersService } from "./users/users.service";
import { UsersController } from "./users/users.controller";
import { SubscriptionsService } from "./subscriptions/subscriptions.service";
import { SubscriptionsController } from "./subscriptions/subscriptions.controller";

@Module({
    imports: [
        DatabaseModule,
        ConfigModule.forRoot({
            envFilePath: `${process.cwd()}/env/${process.env.NODE_ENV}.env`,
            isGlobal: true,
        }),
    ],
    controllers: [AppController, LobbyistController, SubscriptionsController, UsersController],
    providers: [
        AppService,
        LobbyistsService,
        SubscriptionsService,
        UsersService,
        ActivitiesRepository,
        EmailsRepository,
        LobbyistsRepository,
        SubscriptionsRepository,
        UsersRepository,
    ],
})
export class AppModule {}
