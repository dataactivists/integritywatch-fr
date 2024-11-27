import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NotFoundExceptionFilter } from "./exception-filters/not-found";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix("api");
    app.enableCors();
    app.useGlobalFilters(new NotFoundExceptionFilter());
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
