import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { LobbysistsService } from './lobbyists.service';
import { CreateLobbyistDTO } from './lobbyists.dto';

@Controller("lobbyists")
export class LobbyistController {
	constructor(private readonly lobbyistsService: LobbysistsService) {}
	
	@Get()
	public async getLobbyists() {
		return this.lobbyistsService.getLobbyists()
	}
	
	@Get(":id")
	public async getLobbyist(@Param("id") id: number) {
		return this.lobbyistsService.getLobbyistById(id)
	}
	
	@Post()
	public async postLobbyist(@Body() dto: CreateLobbyistDTO) {
		return await this.lobbyistsService.createLobbyist(dto)
	}
	
	@Put(":id")
	public async putLobbyist(@Param("id") id: number) {

	}
	
	@Get(":id")
	public async deleteLobbyist(@Param("id") id: number) {
		return await this.lobbyistsService.deleteLobbyistById(id)
	}
}
