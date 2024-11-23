import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { LobbysistsService } from './lobbyists/lobbyists.service';
import { LobbyistController } from './lobbyists/lobbyists.controller';

@Module({
	imports: [DatabaseModule],
	controllers: [AppController, LobbyistController],
	providers: [AppService, LobbysistsService],
})
export class AppModule {}
