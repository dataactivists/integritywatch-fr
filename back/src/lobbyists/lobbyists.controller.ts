import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './lobbyists.service';

@Controller("lobbyists")
export class LobbyistController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getLobbyists(): string {
    return this.appService.getHello();
  }

  @Get()
  public getLobbyist(): string {
    return this.appService.getHello();
  }

  @Post()
  public postLobbyist(): string {
    return this.appService.getHello();
  }

  @Put()
  public putLobbyist(): string {
    return this.appService.getHello();
  }

  @Get()
  public deleteLobbyist(): string {
    return this.appService.getHello();
  }
}
