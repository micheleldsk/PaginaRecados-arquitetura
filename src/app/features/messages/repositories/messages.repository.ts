import { DatabaseConnection } from "../../../../main/database";
import { Message } from "../../../models";
import { MessageEntity } from "../../../shared/database/entities";

interface IMessageUpdateData {
    title?: string,
    description?: string
}

export class MessageRepository {
    private _repository =
    DatabaseConnection.connection.getRepository(MessageEntity);

    private toModel({
        title,
        description,
        userId,
        id,
        status,
    }: MessageEntity): Message {
        return Message.create(title, description, userId, id, status);
    }

    async addMessage(message: Message): Promise<Message> {
        const newMessage =this._repository.create(message);
        
        const response = await this._repository.save(newMessage);
        
        return this.toModel(response);
    }

    async getUserMessages(userId: string) {
        const response = await this._repository.findBy({userId});

        return response;
    }

    async updateMessage(id: string, title?: string, description?: string) {
        const data: IMessageUpdateData = {};
        
        if(title) {
            data['title'] = title;
        }
            
        if(description) {
            data['description'] = description;
        }
        
        const response = await this._repository.update(id, data);

        return response;
    }

    async toggleActiveStatus(id: string) {
        const message = await this._repository.findOne({where:{id}});

        const response = await this._repository.update({id}, {status:!message?.status});
        
        return response;
    }

    async searchByTitle(userId:string, filterText: string) {
    
        const response = await this._repository.findBy({userId, title: filterText});

        return response;
    }

    async searchByStatus(userId:string, status: boolean) {
      
        const response = await this._repository.findBy({userId, status});

        return response;
    }
    
    async deleteMessage(id: string) {
    
        const response = await this._repository.delete({id});

        return response;
    }

    async checkMessageId(messageId: string) {
        const response = await this._repository.findOne({where:{id: messageId}});
                
        return response;
    }
}