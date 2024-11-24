import { Provider } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Email } from "../entities/emails.entity";

export const EmailsRepository: Provider = {
	provide: "EmailsRepository",
	useFactory: (dataSource: DataSource) => dataSource.getRepository(Email),
	inject: ["DataSource"],
}