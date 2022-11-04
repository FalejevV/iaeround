import React, { ChangeEvent } from "react";
import { AlertText, FileInput, FileSvg, ImageDisplay, ImageDisplayContainer, Input, InputContainer, Label } from "./InputField.styled";

function FileField(props:{
    title:string,
    placeholder?:string,
    multipleFiles?: boolean,
    displayImages?:boolean,
    checkForFileExtention?: string,
    imageFormat?: boolean,
}){

    const [file,setFile] = React.useState<FileList>();
    const [alertText, setAlertText] = React.useState<string>("");

    function updateInputValue(e:ChangeEvent<HTMLInputElement>){
        const target:HTMLInputElement = e.target;
        if(target.files){
            setFile(target.files);
        }
    }

    function getFilePreviews(){
        if(file){
            let imagePreviewArray = []
            for (let i = 0; i < file.length; i++) {
                let imageFile = file[i];
                imagePreviewArray.push(<ImageDisplay key={imageFile.name} src={URL.createObjectURL(imageFile)} alt="preview"/>)
              }
            return imagePreviewArray;
        }
        return "";
    }

    React.useEffect(() => {
        if(file){
            let totalFileSize = 0;
            for (let i = 0; i < file.length; i++) {
                let imageFile = file[i];
                totalFileSize += imageFile.size;
                if(props.imageFormat){
                    if(imageFile.type.slice(0,5) !== "image"){
                        totalFileSize = -1;
                        break
                    }
                    const fileExtention = imageFile.name.slice(-3);
                    if(fileExtention === "gif" || fileExtention === "GIF"){
                        totalFileSize = -1;
                        break;
                    }else{
                        setAlertText("");
                    }
                }
            }
            if(totalFileSize === -1){
                setAlertText("Wrong image format");
            }else if(totalFileSize > 5000000){
                setAlertText("Size should be less than 5MB");
            }else{
                setAlertText("")
            }

            if(props.checkForFileExtention){
                const fileName = file[0].name;
                const fileExtention = fileName.slice(-1 * props.checkForFileExtention.split("").length);
                if(fileExtention !== props.checkForFileExtention){
                    setAlertText(`File should be ${props.checkForFileExtention} format`);
                }else{
                    setAlertText("");
                }
            }
        }
    }, [file]);

    return(
        <InputContainer displayImages={props.displayImages && file !== undefined && alertText === ""}>
             <Label htmlFor={props.title.toLowerCase()}>{props.title}
                {alertText !== "" && <AlertText>{alertText}</AlertText>}
                <Input type="file" onChange={(e) => updateInputValue(e)} id={props.title.toLowerCase()} multiple={props.multipleFiles || false} hidden/>
                <FileSvg ok={alertText === ""} toggle={file != null} viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 19h18v2H3v-2zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.414L13 5.83z"/></FileSvg>
            </Label>

                {props.displayImages && file && alertText === "" &&
                    <ImageDisplayContainer>
                        {getFilePreviews()}
                    </ImageDisplayContainer>
                }
        </InputContainer>
    )
}

export default FileField;