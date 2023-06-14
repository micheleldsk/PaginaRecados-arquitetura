import { RedisConnection } from "../../../../main/database";


export class CacheRepository {
	private redis = RedisConnection.connection;

	public async get(key: string): Promise<any | null> {
		const result = await this.redis.get(key);

		if (!result) return null;

		return JSON.parse(result);
	}

	public async set(key: string, value: any): Promise<void> {
		await this.redis.set(key, JSON.stringify(value));
	}

	public async del(key: string): Promise<void> {
		await this.redis.del(key);
	}
}