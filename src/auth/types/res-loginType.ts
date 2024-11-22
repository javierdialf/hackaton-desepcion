import { User } from "src/users/entities/users.entity"

export type resLoginType = {
    message: string,
    access_token: string,
    refresh_token: string, 
    user: User
}