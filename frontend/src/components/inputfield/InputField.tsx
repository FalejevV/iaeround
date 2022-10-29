import { Input, InputContainer, Label } from "./InputField.styled";


function InputField(props:{
    title:string,
    type?: string,
    placeholder?: string
}){
    return(
        <InputContainer>
            <Label htmlFor={props.title}>{props.title}</Label>
            <Input placeholder={props.placeholder || ""} type={props.type}/>
        </InputContainer>
    )
}

export default InputField;