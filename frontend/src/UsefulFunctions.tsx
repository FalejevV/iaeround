import { fetchAddress } from "./DeveloperData";
import  imageError from "./img/ImageError.svg";

export function profileImageURLAvatar(avatar:string):string{
    if(avatar.trim() === ""){
        return "";
    }
    return `${fetchAddress}/storage/avatar/${avatar}.jpeg`
}

export function routeImageURL(routeId:string, imageName:string){
    return `${fetchAddress}/storage/img/${routeId}/${imageName}`;
}

export function errorImageReplace(imageElement:any){
    imageElement.currentTarget.src = imageError;
}