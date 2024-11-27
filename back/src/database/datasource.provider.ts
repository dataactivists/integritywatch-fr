import { Provider } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { EnvType } from "src/env.enum";
import { DatabaseType, DataSource, DataSourceOptions } from "typeorm";

export const DataSourceProvider: Provider = {
    provide: "DataSource",
    useFactory: async (configService: ConfigService) => {
        const dataSource = new DataSource({
            type: configService.get<DatabaseType>("DB_DRIVER"),
            host: configService.get<string>("DB_HOST"),
            port: configService.get<number>("DB_PORT"),
            username: configService.get<string>("DB_USERNAME"),
            password: configService.get<string>("DB_PASSWORD"),
            database: configService.get<string>("DB_DATABASE"),
            entities: [__dirname + "/../**/*.entity{.ts,.js}"],
            synchronize: configService.get<string>("ENV") == EnvType.DEV,
        } as DataSourceOptions);
        return dataSource.initialize();
    },
    inject: [ConfigService],
};
