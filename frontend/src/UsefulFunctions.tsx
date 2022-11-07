import { fetchAddress } from "./DeveloperData";

export function profileImageURLAvatar(avatar:string):string{
    if(avatar.trim() === ""){
        return "";
    }
    return `${fetchAddress}/storage/avatar/${avatar}`
}