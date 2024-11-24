import { Provider } from "@nestjs/common";
import { Lobbyist } from "src/database/entities/lobbyists.entity";
import { DataSource } from "typeorm";

export const LobbyistsRepository: Provider = {
	provide: "LobbyistsRepository",
	useFactory: (dataSource: DataSource) => dataSource.getRepository(Lobbyist),
	inject: ["DataSource"],
}