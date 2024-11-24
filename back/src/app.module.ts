import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { LobbysistsService } from './lobbyists/lobbyists.service';
import { LobbyistController } from './lobbyists/lobbyists.controller';
import { ActivitiesRepository } from './activities/activities.repository';
import { EmailsRepository } from './emails/emails.repository';
import { LobbyistsRepository } from './lobbyists/lobbyists.repository';
import { SubscriptionsRepository } from './subscriptions/subscriptions.repository';
import { UsersRepository } from './users/users.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [DatabaseModule, ConfigModule.forRoot({
		isGlobal: true
	})],
	controllers: [AppController, LobbyistController],
	providers: [AppService, LobbysistsService, ActivitiesRepository, EmailsRepository,LobbyistsRepository, SubscriptionsRepository, UsersRepository],
})
export class AppModule {}
