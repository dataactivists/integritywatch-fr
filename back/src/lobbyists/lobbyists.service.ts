import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Lobbyist } from './lobyists.entity';
import { CreateLobbyistDTO } from './lobbyists.dto';

@Injectable()
export class LobbysistsService {
	constructor(@Inject("LobbyistsRepository") private readonly repo: Repository<Lobbyist>) {}
	
	public async getLobbyists() {
		return await this.repo.find();
	}
	
	public async getLobbyistById(id: number) {
		return await this.repo.findOneBy({
			id: id
		});
	}
	
	public async createLobbyist(dto: CreateLobbyistDTO) {
		let lob = new Lobbyist()
		lob.name = dto.name
		return await this.repo.save(lob)
	}
	
	public async deleteLobbyistById(id: number) {
		return await this.repo.delete({
			id: id
		})
	}
}
