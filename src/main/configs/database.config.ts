import 'dotenv/config';
import { DataSource } from 'typeorm';
import { MessageEntity, UserEntity } from '../../app/shared/database/entities';
import { CreateMessagesTable1685209720186, CreateUsersTable1685208989179 } from '../../app/shared/database/migrations';

export const dataSource = new DataSource({
	type: 'postgres',
	url: process.env.DATABASE_URL,
	synchronize: false,
	entities: [UserEntity, MessageEntity],
	migrations: [CreateUsersTable1685208989179, CreateMessagesTable1685209720186],
});