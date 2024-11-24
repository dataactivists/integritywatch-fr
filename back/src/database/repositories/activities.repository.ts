import { Provider } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Activity } from "../entities/activities.entity";

export const ActivitiesRepository: Provider = {
	provide: "ActivitiesRepository",
	useFactory: (dataSource: DataSource) => dataSource.getRepository(Activity),
	inject: ["DataSource"],
}