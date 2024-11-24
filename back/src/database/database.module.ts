import { Module } from "@nestjs/common";
import { DataSourceProvider } from "./datasource.provider"
import { LobbyistsRepository } from "./repositories/lobbyists.repository";
import { UsersRepository } from "./repositories/users.repository";
import { ActivitiesRepository } from "./repositories/activities.repository";
import { EmailsRepository } from "./repositories/emails.repository";
import { SubscriptionsRepository } from "./repositories/subscriptions.repository";

@Module({
	providers: [DataSourceProvider, ActivitiesRepository, EmailsRepository,LobbyistsRepository, SubscriptionsRepository, UsersRepository],
	exports: [DataSourceProvider, ActivitiesRepository, EmailsRepository,LobbyistsRepository, SubscriptionsRepository, UsersRepository],
})
export class DatabaseModule {}