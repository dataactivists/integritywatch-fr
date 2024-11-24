import { Provider } from "@nestjs/common";
import { DataSource } from "typeorm";
import { User } from "../entities/users.entity";

export const UsersRepository: Provider = {
	provide: "UsersRepository",
	useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
	inject: ["DataSource"],
}