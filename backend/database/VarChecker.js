import { type } from "os";

export function symbolCheck(variable){
    const forbiddenChatacters = /[`^&()+\\[\]{};:"\\|<>\/?~]/
    return forbiddenChatacters.test(variable);
}

export function bodyInjectionCheck(body){
    let errorArray = []
    Object.keys(body).forEach(key => {
        if(Array.isArray(body[key])){
            body[key].forEach(arrayItem => {
                if(symbolCheck(arrayItem)){
                    errorArray.push(key)
                }
            })
        }else{
            if(symbolCheck(body[key].toString())){
                errorArray.push(key);
            }
        }
        
    });
    return errorArray.length > 0 ? errorArray : "OK";
}