import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateLobbyistDTO, EditLobbyistDTO } from "./lobbyists.dto";
import { ApplyDtoToModel } from "src/helpers";
import { Lobbyist } from "./lobbyists.entity";

@Injectable()
export class LobbyistsService {
    constructor(
        @Inject("LobbyistsRepository")
        private readonly repo: Repository<Lobbyist>,
    ) {}

    public async getLobbyists() {
        return await this.repo.find();
    }

    public async getLobbyistById(id: number) {
        return await this.repo.findOneBy({
            lobbyist_id: id,
        });
    }

    public async createLobbyist(dto: CreateLobbyistDTO) {
        const lob = new Lobbyist();
        lob.name = dto.name;
        return await this.repo.save(lob);
    }

    public async editLobbyist(id: number, dto: EditLobbyistDTO) {
        const lob = await this.repo.findOneBy({
            lobbyist_id: id,
        });
        if (lob == null) {
            return null;
        }
        ApplyDtoToModel(dto, lob);
        return await this.repo.save(lob);
    }

    public async deleteLobbyistById(id: number) {
        return await this.repo.delete({
            lobbyist_id: id,
        });
    }
}
