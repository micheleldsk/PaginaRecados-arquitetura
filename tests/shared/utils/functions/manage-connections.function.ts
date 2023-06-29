import {
  DatabaseConnection,
  RedisConnection,
} from "../../../../src/main/database";

type TConnection = "connect" | "destroy";

export const manageConnections = async (type: TConnection) => {
  if (type === "connect") {
    return Promise.all([
      DatabaseConnection.connect(),
      RedisConnection.connect(),
    ]);
  }

  return Promise.all([DatabaseConnection.destroy(), RedisConnection.destroy()]);
};
