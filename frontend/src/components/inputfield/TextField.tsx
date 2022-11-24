import React, { ChangeEvent } from "react";
import { AlertText, Input, InputContainer, Label } from "./InputField.styled";

function TextField(props:{
    title:string,
    placeholder?:string,
    forbiddenCharacters?:string[],
    type?: string,
    value?: string,
}){
    const [inputValue,setInputValue] = React.useState<string>(props.value || "");
    const [alertText, setAlertText] = React.useState<string>("");

    function updateValue(e:ChangeEvent<HTMLInputElement>){
        setInputValue(e.target.value);
    }

    React.useEffect(() => {
        const forbiddenCharArray = props.forbiddenCharacters || [];
        if(forbiddenCharArray.length > 0){
            const splitInputValue = inputValue.split("");
            let errorFound = false;
            splitInputValue.forEach(char => {
                if(forbiddenCharArray.includes(char)){
                    errorFound = true;
                }
            })
            if (errorFound){
                const charText = forbiddenCharArray.join(" ");
                setAlertText(`${charText} are not allowed in this field`);
            }else{
                setAlertText(``);
            }
        }
    }, [inputValue]);

    return(
        <InputContainer>
            <Label>{props.title}</Label>
            {alertText !== "" && <AlertText>{alertText}</AlertText>}
            <Input type={props.type || "text"} value={inputValue} onChange={(e) => updateValue(e)} placeholder={props.placeholder || ''} id={props.title.toLowerCase()} />
        </InputContainer>
    )
}

export default TextField;