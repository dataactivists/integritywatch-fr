import { HttpCode, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateSubscriptionDTO, EditSubscriptionDTO } from "./subscriptions.dto";
import { ApplyDtoToModel } from "src/helpers";
import { Subscription } from "./subscriptions.entity";
import { UsersService } from "src/users/users.service";
import { LobbyistsService } from "src/lobbyists/lobbyists.service";
import { log } from "console";

@Injectable()
export class SubscriptionsService {
    constructor(
        @Inject("SubscriptionsRepository") private readonly repo: Repository<Subscription>,
        private readonly usersService: UsersService,
        private readonly lobbyistsService: LobbyistsService,
    ) {}

    public async getSubscriptions() {
        return await this.repo.find();
    }

    public async getSubscriptionById(id: number) {
        return await this.repo.findOneBy({
            subscription_id: id,
        });
    }

    public async createSubscription(dto: CreateSubscriptionDTO) {
        const sub = new Subscription();
        log(dto.user_id)
        await this.setUser(sub, dto.user_id)
        await this.setLobbyist(sub, dto.lobbyist_id)
        return await this.repo.save(sub);
    }

    public async editSubscription(id: number, dto: EditSubscriptionDTO) {
        const sub = await this.repo.findOneBy({
            subscription_id: id,
        });
        if(dto.user_id) {
            await this.setUser(sub, dto.user_id)
        }
        if(dto.lobbyist_id) {
            await this.setLobbyist(sub, dto.lobbyist_id)
        }
        ApplyDtoToModel(dto, sub)
        return await this.repo.save(sub);
    }

    public async deleteSubscriptionById(id: number) {
        return await this.repo.delete({
            subscription_id: id,
        });
    }

    private async setUser(sub: Subscription, userId: number) {
        const user = await this.usersService.getUserById(userId);
        if (user == null) {
            throw new HttpException(`Unknow user with id '${userId}'`, HttpStatus.UNPROCESSABLE_ENTITY)
        }
        sub.user = user
    }

    private async setLobbyist(sub: Subscription, lobbyistId: number) {
        const lobbyist = await this.lobbyistsService.getLobbyistById(lobbyistId);
        if (lobbyist == null) {
            throw new HttpException(`Unknow lobbyist with id '${lobbyistId}'`, HttpStatus.UNPROCESSABLE_ENTITY)
        }
        sub.lobbyist = lobbyist
    }
}
