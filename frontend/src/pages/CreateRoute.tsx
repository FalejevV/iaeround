import React, {FormEvent } from "react";
import { Label } from "../components/inputfield/InputField.styled";
import Tag from "../components/tag/Tag";
import { Form, FormContainer, TagClickContainer, TagsAboutContainer, TagsContainer, TopFlexbox, TopGrid } from "./CreateRoute.styled";
import LoadingAnimation from "../components/loadinganimation/LoadingAnimation";
import { Button } from "../components/Styles.styled";
import TextField from "../components/inputfield/TextField";
import NumberField from "../components/inputfield/NumberField";
import FileField from "../components/inputfield/FileField";
import TextAreaField from "../components/inputfield/TextAreaField";
import { fetchAddress } from "../DeveloperData";
import { compressMultipleImages } from "../UsefulFunctions";

function CreateRoute(props:{
    headerExtend:any
}){
    const [tagDatabase, setTagDatabase] = React.useState<{id:number,title:string}[]>([]);
    const [connectionError, setConnectionError] = React.useState("");
    const [tags, setTags] = React.useState<string[]>([]);
    const [submitStatus, setSubmitStatus] = React.useState('');

    React.useEffect(() => {
        props.headerExtend(false);
        console.log("fetchTags");
        fetch(fetchAddress + `/api/tags`).then(res => res.json()).then(data => setTagDatabase(data.data)).catch(error => {
            setConnectionError("Could not connect to database. Sorry :/");
        });
    },[props]);


    function triggerTag(tagName:string){
        if(!tags.includes(tagName)){
            setTags(prevTags => [...prevTags,tagName]);
        }else{
            setTags(prevTags => prevTags.filter(tag => tag !== tagName));
        }
    }

    async function formSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        const titleInput = e.currentTarget.elements[0] as HTMLInputElement;
        const distanceInput = e.currentTarget.elements[1] as HTMLInputElement;
        const timeInput = e.currentTarget.elements[2] as HTMLInputElement;
        const gpxInput = e.currentTarget.elements[3] as HTMLInputElement;
        const imagesInput = e.currentTarget.elements[4] as HTMLInputElement;
        const aboutInput = e.currentTarget.elements[5] as HTMLInputElement;
        let formData = new FormData();
        formData.append('title', titleInput.value);
        formData.append('distance', distanceInput.value);
        formData.append('time',timeInput.value);
        formData.append('about', aboutInput.value);
        if(gpxInput.files){
            formData.append('gpx', gpxInput.files[0]);
        }
        if(imagesInput.files){
            let imagesCompressed = await compressMultipleImages(imagesInput.files);
            imagesCompressed.forEach(file => {
                formData.append('image', file);
            })
        }

        fetch(fetchAddress + '/api/route', {
            method: 'POST',
            credentials: 'include',
            headers: { 
                'Accept': 'application/json'
            },
            body: formData
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return(
        <FormContainer>
            <Form onSubmit={(e) => formSubmit(e)}>
                <TopGrid>
                    <TopFlexbox>
                        <TextField title="Title"/>
                        <NumberField title="Distance" placeholder="km"/>
                        <NumberField title="Time" placeholder="minutes"/>
                    </TopFlexbox>

                    <TopFlexbox>
                        <FileField title="GPX" checkForFileExtention="gpx"/>
                        <FileField title="Images" imageFormat multipleFiles displayImages/>
                    </TopFlexbox>

                </TopGrid>
                <TagsAboutContainer>
                    <Label>Tags (Please select at least 2)</Label>
                    <TagsContainer>
                        {tagDatabase.length === 0 && connectionError === "" && <LoadingAnimation/>}
                        {connectionError && <Label>{connectionError}</Label>}
                        {tagDatabase.map(tag => {
                            return (
                                <TagClickContainer key={tag.title} onClick={() => triggerTag(tag.title)}>
                                    <Tag key={tag.id} title={tag.title} chosen={tags.includes(tag.title)}/>
                                </TagClickContainer>
                            )
                        })}
                    </TagsContainer>
                </TagsAboutContainer>

                <TextAreaField title="About" placeholder="Tell us more about this route :)" />
                <Button>Create Route</Button>
            </Form>
        </FormContainer>
    )
}

export default CreateRoute;