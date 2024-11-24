import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO, EditUserDTO } from './users.dto';

@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService) {}
	
	@Get()
	public async getUsers() {
		return this.usersService.getUsers()
	}
	
	@Get(":id")
	public async getLobbyist(@Param("id") id: number) {
		return this.usersService.getUserById(id)
	}
	
	@Post()
	public async postLobbyist(@Body() dto: CreateUserDTO) {
		return await this.usersService.createUser(dto)
	}
	
	@Put(":id")
	public async putLobbyist(@Param("id") id: number, @Body() dto: EditUserDTO) {
		return await this.usersService.editUser(id, dto)
	}
	
	@Delete(":id")
	public async deleteLobbyist(@Param("id") id: number) {
		return await this.usersService.deleteUserById(id)
	}
}
