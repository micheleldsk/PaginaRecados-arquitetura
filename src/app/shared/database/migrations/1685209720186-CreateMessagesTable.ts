import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateMessagesTable1685209720186 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "messages",
            columns: [{
                name: "id",
                type: "uuid",
                isPrimary: true,
            },{
                name: "user_id",
                type: "uuid",
                isUnique: false,
                isNullable: false  
            },{
                name: "status",
                type: "boolean",
                default: false,
                isNullable: false 
            },
            {
                name: "title",
                type: "varchar",
                length: "100",
                isNullable: false
            },{
                name: "description",
                type: "varchar",
                length: "300",
                isNullable: false 
            },{
                name: "created_at",
                type: "timestamp",
                isNullable: false   
            },{
                name: "updated_at",
                type: "timestamp",
                isNullable: false 
            }],

            foreignKeys: [new TableForeignKey({
                name: "fk_messages_users",
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE"
            })]

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages", true, true, true)
    }

}
