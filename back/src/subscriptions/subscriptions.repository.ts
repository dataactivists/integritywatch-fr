import { Provider } from "@nestjs/common";
import { Subscription } from "rxjs";
import { DataSource } from "typeorm";

export const SubscriptionsRepository: Provider = {
	provide: "SubscriptionsRepository",
	useFactory: (dataSource: DataSource) => dataSource.getRepository(Subscription),
	inject: ["DataSource"],
}