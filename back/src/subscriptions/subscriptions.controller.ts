import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from "@nestjs/common";
import { SubscriptionsService } from "./subscriptions.service";
import { CreateSubscriptionDTO, EditSubscriptionDTO } from "./subscriptions.dto";

@Controller("subscriptions")
export class SubscriptionsController {
    constructor(private readonly subscriptionsService: SubscriptionsService) {}

    @Get()
    public async getSubscriptions() {
        return this.subscriptionsService.getSubscriptions();
    }

    @Get(":id")
    public async getSubscription(@Param("id") id: number) {
        return this.subscriptionsService.getSubscriptionById(id);
    }

    @Post()
    public async postSubscription(@Body() dto: CreateSubscriptionDTO) {
        return await this.subscriptionsService.createSubscription(dto);
    }

    @Put(":id")
    public async putSubscription(
        @Param("id") id: number,
        @Body() dto: EditSubscriptionDTO,
    ) {
        return await this.subscriptionsService.editSubscription(id, dto);
    }

    @Delete(":id")
    public async deleteSubscription(@Param("id") id: number) {
        return await this.subscriptionsService.deleteSubscriptionById(id);
    }
}
