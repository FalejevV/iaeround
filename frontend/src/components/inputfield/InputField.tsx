import React, { FormEvent } from "react";
import { AlertText, FileInput, FileSvg, ImageDisplay, ImageDisplayContainer, Input, InputContainer, Label, TextField } from "./InputField.styled";


function InputField(props:{
    title:string,
    type?: string,
    placeholder?: string
    forbiddenSymbols?: string,
    requiredSymbols?: string,
    onlyNumbers?: boolean,
    imageFiles?: boolean,
}){

    const [inputValue, setInputValue] = React.useState<string>("");
    const [alertText, setAlertText] = React.useState<string>("");

    const [file, setFile] = React.useState<FileList>();

    function updateInputValue(e:FormEvent<HTMLInputElement>){
        const target = e.target as HTMLInputElement;
        const value:string = target.value;
        if(props.imageFiles || props.type === "file"){
            const files = target.files;
            if (files){
                setFile(files);
            }
        }else{
            setInputValue(value);
        }
    }

    function updateTextArea(e:FormEvent<HTMLTextAreaElement>){
        const target = e.target as HTMLInputElement;
        const value:string = target.value;
        setInputValue(value);
    }

    function getFilePreviews(){
        if(file){
            let imagePreviewArray = []
            for (let i = 0; i < file.length; i++) {
                let imageFile = file[i];
                imagePreviewArray.push(<ImageDisplay src={URL.createObjectURL(imageFile)} alt="preview"/>)
              }
            return imagePreviewArray;
        }
        return "";
    }

    React.useEffect(() => {
        if(props.type === "file" && file){
            let totalFileSize = 0;
            for (let i = 0; i < file.length; i++) {
                let imageFile = file[i];
                totalFileSize += imageFile.size;
            }
            if(totalFileSize > 2000000){
                setAlertText("Size should be less than 2MB")
            }else{
                setAlertText("")
            }
        }else
        if(inputValue.trim() !== ""){
            if(props.onlyNumbers){
                if(!Number(inputValue)){
                    setAlertText("Type only numbers")
                }else{
                    setAlertText("");
                }
            }
            if(props.requiredSymbols){
                const regSymbols = new RegExp(props.requiredSymbols);
                if(!regSymbols.test(inputValue.toString())){
                    setAlertText(props.requiredSymbols + " required in this field");
                }else{
                    setAlertText("");
                }
            }
            if(props.imageFiles){

            }
        }else{
            setAlertText("");
        }
    }, [inputValue,props,file]);

    return(
        <InputContainer>
            {!props.type && 
                <>
                    <Label htmlFor={props.title}>{props.title}</Label>
                    {alertText !== "" && <AlertText>{alertText}</AlertText>}
                    <Input onChange={(e) => updateInputValue(e)} id={props.title} placeholder={props.placeholder || ""}  type={props.type}/>
                </>
            }

            {props.type === "textfield" && 
                <>
                    <Label htmlFor={props.title}>{props.title}</Label>
                    {alertText !== "" && <AlertText>{alertText}</AlertText>}
                    <TextField onChange={(e) => updateTextArea(e)} id={props.title} placeholder={props.placeholder || ""}/>
                </>
            }
            
            
            
            {props.type === "file" && 
                <Label htmlFor={props.title}>{props.title}
                    {alertText !== "" && <AlertText>{alertText}</AlertText>}
                    <FileInput onChange={(e) => updateInputValue(e)} id={props.title} type={props.type} multiple={props.imageFiles || false}/>
                    <FileSvg ok={alertText === ""} toggle={file != null} viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 19h18v2H3v-2zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.414L13 5.83z"/></FileSvg>
                    {props.imageFiles && file && alertText === "" &&
                        <ImageDisplayContainer>
                            {getFilePreviews()}
                        </ImageDisplayContainer>}
                </Label>
            }
        </InputContainer>
    )
}

export default InputField;