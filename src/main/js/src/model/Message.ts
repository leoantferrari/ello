import {User} from "./User";

export interface Message{
    id: number,
    message: string,
    urlEnding: string,
    author: User,
    liked:boolean,
    date:string
}