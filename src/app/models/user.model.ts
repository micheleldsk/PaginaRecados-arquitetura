import { v4 } from "uuid";

export class User {
    id: string;
    name: string;
    email: string;
    password: string

    constructor(name: string, email: string, password: string, id?:string) {
        this.id = id ?? v4();
        this.name = name;
        this.email = email;
        this.password = password;
      }

      static create(
        name: string,
        email: string,
        password: string,
        id?: string
      ) {
        return new User(name, email, password, id);
      }
    
      toJson() {
        return {
          id: this.id,
          name: this.name,
          email: this.email,
          password: this.password,
        };
      }
}