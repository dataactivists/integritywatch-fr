import { Provider } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Subscription } from "./subscriptions.entity";

export const SubscriptionsRepository: Provider = {
    provide: "SubscriptionsRepository",
    useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(Subscription),
    inject: ["DataSource"],
};
