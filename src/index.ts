import { DatabaseConnection, RedisConnection } from "./main/database";
import { runServer } from "./main/server";

Promise.all([DatabaseConnection.connect(), RedisConnection.connect()])
	.then(runServer)
	.catch((error: any) => {
		console.log(error);
	});
