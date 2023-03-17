import {save_user} from "@types/userTypes";

export const userCreator = (user) => ({type:save_user,payload:{user}})