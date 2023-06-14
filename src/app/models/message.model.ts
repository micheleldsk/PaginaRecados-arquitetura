import { v4 } from "uuid";

export class Message {
    title: string;
    description: string;
    userId: string;
    id: string;
    status: boolean = true;

    constructor(title: string, description: string, userId: string, id?:string, status?: boolean) {
        this.title = title;
        this.description = description;
        this.userId = userId;
        this.id = id ?? v4();
        this.status = status ?? false
      }

      static create(
        title: string,
        description: string,
        userId: string,
        id?: string,
        status?: boolean,
      ) {
        return new Message(title, description, userId, id, status);
      }
    
      toJson() {
        return {
          title: this.title,
          description: this.description,
          userId: this.userId,
          id: this.id,
          status: this.status
        };
      }
}