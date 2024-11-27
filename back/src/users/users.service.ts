import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { EditUserDTO, CreateUserDTO } from "./users.dto";
import { ApplyDtoToModel } from "src/helpers";
import { User } from "./users.entity";

@Injectable()
export class UsersService {
    constructor(
        @Inject("UsersRepository") private readonly repo: Repository<User>,
    ) {}

    public async getUsers() {
        return await this.repo.find();
    }

    public async getUserById(id: number) {
        return await this.repo.findOneBy({
            user_id: id,
        });
    }

    public async createUser(dto: CreateUserDTO) {
        const user = new User();
        user.email = dto.email;
        user.created_at = new Date();
        return await this.repo.save(user);
    }

    public async editUser(id: number, dto: EditUserDTO) {
        const user = await this.repo.findOneBy({
            user_id: id,
        });
        if (user == null) {
            return null;
        }
        ApplyDtoToModel(dto, user);
        return await this.repo.save(user);
    }

    public async deleteUserById(id: number) {
        return await this.repo.delete({
            user_id: id,
        });
    }
}
