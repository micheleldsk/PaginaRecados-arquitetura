import { BeforeInsert, BeforeUpdate, CreateDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 } from "uuid";


export abstract class BaseEntity {
    @PrimaryColumn()
    id!: string

    @CreateDateColumn({name: "created_at"})
    createdAt!: Date
    
    @UpdateDateColumn({name: "updated_at"})
    updatedAt!: Date

    @BeforeInsert()
    beforeInsert() {
        this.id = v4(),
        this.createdAt = new Date(),
        this.updatedAt = new Date()
    }

    @BeforeUpdate()
    beforeUpdate() {
        this.updatedAt = new Date() 
    }
}