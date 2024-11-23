import { Provider } from "@nestjs/common";
import { Lobbyist } from "src/lobbyists/lobyists.entity";
import { DataSource } from "typeorm";

export const LobbyistsRepository: Provider = {
	provide: "LobbyistsRepository",
	useFactory: (dataSource: DataSource) => dataSource.getRepository(Lobbyist),
	inject: ["DataSource"],
}