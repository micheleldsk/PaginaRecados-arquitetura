import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity, UserEntity } from ".";

@Entity({name: "messages"})
export class MessageEntity extends BaseEntity {
    @Column({name: "user_id"})
    userId!: string 

    @Column()
    status!: boolean 

    @Column()
    title!: string 

    @Column()
    description!: string 

    @ManyToOne(() => UserEntity, (fk) => fk.messages)
    @JoinColumn({name: "user_id", referencedColumnName: "id"})
    user?: UserEntity
}