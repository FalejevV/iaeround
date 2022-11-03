import React, { ChangeEvent } from "react";
import { AlertText, Input, InputContainer, Label, TextField } from "./InputField.styled";

function TextAreaField(props:{
    title:string,
    placeholder?:string,
    forbiddenCharacters?:string[],
}){

    const [inputValue,setInputValue] = React.useState<string>("");
    const [alertText, setAlertText] = React.useState<string>("");

    function updateValue(e:ChangeEvent<HTMLTextAreaElement>){
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
            <TextField value={inputValue} onChange={(e) => updateValue(e)} placeholder={props.placeholder || ''} id={props.title.toLowerCase()} />
        </InputContainer>
    )
}

export default TextAreaField;