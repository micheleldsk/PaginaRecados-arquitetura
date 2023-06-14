import 'dotenv/config';
import Redis from 'ioredis';

export class RedisConnection {
	private static _connection: Redis;

	public static async connect(): Promise<void> {
		if (!this._connection) {
			this._connection = new Redis({				
				path: process.env.REDIS_URL
				// port: Number(process.env.REDIS_PORT),
				// username: process.env.REDIS_USERNAME,
				// password: process.env.REDIS_PASSWORD,
			});
		}
	}

	public static get connection() {
		if (!this._connection) {
			throw new Error('CACHE_CONNECTION_ERROR');
		}

		return this._connection;
	}

	public static async destroy() {
		if (!this._connection) {
			throw new Error('CACHE_NOT_CONNECTED');
		}

		await this._connection.quit();
	}
}