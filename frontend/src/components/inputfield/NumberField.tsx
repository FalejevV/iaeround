import React, { ChangeEvent } from "react";
import { AlertText, Input, InputContainer, Label } from "./InputField.styled";

function NumberField(props:{
    title:string,
    placeholder?:string,
}){

    const [inputValue,setInputValue] = React.useState<string>("");
    const [alertText, setAlertText] = React.useState<string>("");

    function updateValue(e:ChangeEvent<HTMLInputElement>){
        setInputValue(e.target.value);
    }

    React.useEffect(() => {
        if(inputValue.trim() !== ""){
             if(!Number(inputValue)){
                setAlertText("Type only numbers")
            }else{
                setAlertText("");
            } 
        }else{
            setAlertText("");
        }
      
    }, [inputValue]);

    return(
        <InputContainer>
            <Label>{props.title}</Label>
            {alertText !== "" && <AlertText>{alertText}</AlertText>}
            <Input type="text" value={inputValue} onChange={(e) => updateValue(e)} placeholder={props.placeholder || ''} id={props.title.toLowerCase()} />
        </InputContainer>
    )
}

export default NumberField;