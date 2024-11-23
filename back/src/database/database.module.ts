import { Module, Provider } from "@nestjs/common";
import { DataSourceProvider } from "./datasource.provider"
import { LobbyistsRepository } from "./repositories/lobbyists.repository";

@Module({
	providers: [DataSourceProvider, LobbyistsRepository],
	exports: [DataSourceProvider, LobbyistsRepository],
})
export class DatabaseModule {}