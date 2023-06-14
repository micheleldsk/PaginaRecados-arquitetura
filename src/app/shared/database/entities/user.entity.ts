import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity, MessageEntity } from ".";

@Entity({name: "users"})
export class UserEntity extends BaseEntity {
    @Column()
    name!: string 

    @Column()
    email!: string 

    @Column()
    password!: string 

    @OneToMany(() => MessageEntity, (fk) => fk.user)
    @JoinColumn({name: "id", referencedColumnName: "user_id"})
    messages?: MessageEntity[]
}