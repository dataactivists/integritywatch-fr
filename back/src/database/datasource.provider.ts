import { Provider } from "@nestjs/common"
import { Lobbyist } from "src/lobbyists/lobyists.entity"
import { DataSource } from "typeorm"

export const DataSourceProvider: Provider = {
	provide: 'DataSource',
	useFactory: async () => {
		const dataSource = new DataSource({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'root',
			database: 'test',
			entities: [
				__dirname + '/../**/*.entity{.ts,.js}',
			],
			synchronize: true,
		});
		return dataSource.initialize();
	},
}