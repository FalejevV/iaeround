import { fetchAddress } from "./DeveloperData";

export function profileImageURLAvatar(avatar:string):string{
    if(avatar.trim() === ""){
        return "";
    }
    return `${fetchAddress}/storage/avatar/${avatar}`
}

export function routeImageURL(routeId:string, imageName:string){
    return `${fetchAddress}/storage/img/${routeId}/${imageName}`;
}