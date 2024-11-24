import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Lobbyist } from '../database/entities/lobbyists.entity';
import { CreateLobbyistDTO, EditLobbyistDTO } from './lobbyists.dto';
import { ApplyDtoToModel } from 'src/helpers';

@Injectable()
export class LobbysistsService {
	constructor(@Inject("LobbyistsRepository") private readonly repo: Repository<Lobbyist>) {}
	
	public async getLobbyists() {
		return await this.repo.find();
	}
	
	public async getLobbyistById(id: number) {
		return await this.repo.findOneBy({
			lobbyist_id: id
		});
	}
	
	public async createLobbyist(dto: CreateLobbyistDTO) {
		let lob = new Lobbyist()
		lob.name = dto.name
		return await this.repo.save(lob)
	}
	
	public async editLobbyist(id: number, dto: EditLobbyistDTO) {
		let lob = await this.repo.findOneBy({
			lobbyist_id: id
		})
		if (lob == null) {
			return null
		}
		ApplyDtoToModel(dto, lob)
		return await this.repo.save(lob)
	}

	public async deleteLobbyistById(id: number) {
		return await this.repo.delete({
			lobbyist_id: id
		})
	}
}
