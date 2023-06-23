import "dotenv/config";
import { DataSource } from "typeorm";
import { MessageEntity, UserEntity } from "../../app/shared/database/entities";
import {
  CreateMessagesTable1685209720186,
  CreateUsersTable1685208989179,
} from "../../app/shared/database/migrations";
import { TestMigration1687560860431 } from "../../../tests/app/shared/migrations/1687560860431-TestMigration";

let dataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  entities: [UserEntity, MessageEntity],
  migrations: [CreateUsersTable1685208989179, CreateMessagesTable1685209720186],
});
if (process.env.NODE_ENV === "test") {
  dataSource = new DataSource({
    type: "sqlite",
    database: "./databaseTest.sqlite",
    synchronize: false,
    entities: [UserEntity, MessageEntity],
    migrations: [TestMigration1687560860431],
  });
}
export { dataSource };
