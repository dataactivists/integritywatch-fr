import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lobbyist {
	@PrimaryGeneratedColumn("increment")
	id: number;
	
	@Column("tinytext")
	name: string;
}