import { storageCloudURL } from "./DeveloperData";
import  imageError from "./img/ImageError.svg";
import imageCompression from 'browser-image-compression';

const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true
}

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

export async function compressImage(image:File){
    let result = await imageCompression(image, options);
    return result;
}

export async function compressMultipleImages(files:FileList){
    let fileResult:File[] = [];
    for (let i = 0; i < files.length; i++) {
        fileResult.push(await imageCompression(files[i], options));
    }
    return fileResult;

}