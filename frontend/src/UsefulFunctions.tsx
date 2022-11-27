import { storageCloudURL } from "./DeveloperData";
import  imageError from "./img/ImageError.svg";

export function profileImageURLAvatar(avatar:string, id:string):string{
    if(avatar.trim() === ""){
        return "";
    }
    return `${storageCloudURL}/avatar/${id}/${avatar}`;
}

export function routeImageURL(routeId:string, imageName:string){
    return `${storageCloudURL}/img/${routeId}/${imageName}`;
}

export function errorImageReplace(imageElement:any){
    imageElement.currentTarget.src = imageError;
}