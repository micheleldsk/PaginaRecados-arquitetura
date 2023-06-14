import 'dotenv/config';
import 'reflect-metadata';
import { dataSource } from '../configs/database.config';
import { DataSource } from 'typeorm';

export class DatabaseConnection {
	private static _connection: DataSource;

	public static async connect() {
		if (!this._connection) {
			this._connection = await dataSource.initialize();
			console.log('DATABASE_CONNECTION_SUCCESSFUL');
		}
	}

	public static get connection() {
		if (!this._connection) {
			throw new Error('DATABASE_CONNECTION_ERROR');
		}

		return this._connection;
	}

	public static async destroy() {
		if (!this._connection) {
			throw new Error('DATABASE_NOT_CONNECTED');
		}

		await this._connection.destroy();
	}
}