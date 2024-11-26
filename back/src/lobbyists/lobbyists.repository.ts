import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Lobbyist } from './lobbyists.entity';

export const LobbyistsRepository: Provider = {
  provide: 'LobbyistsRepository',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Lobbyist),
  inject: ['DataSource'],
};
