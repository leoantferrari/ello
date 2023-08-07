import {User} from "./User";

export interface Letter {
    id: number,
    title: string,
    message: string,
    urlEnding: string,
    owner:User
}