import React, {FormEvent } from "react";
import InputField from "../components/inputfield/InputField";
import { Label } from "../components/inputfield/InputField.styled";
import Tag from "../components/tag/Tag";
import { Form, FormContainer, TagClickContainer, TagsAboutContainer, TagsContainer, TopFlexbox, TopGrid } from "./CreateRoute.styled";
import LoadingAnimation from "../components/loadinganimation/LoadingAnimation";
import { Button } from "../components/Styles.styled";

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
        fetch(`https://iaeround-backend.vercel.app/api/tags`).then(res => res.json()).then(data => setTagDatabase(data)).catch(error => {
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

    function formSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        const titleInput = e.currentTarget.elements[0] as HTMLInputElement;
        const distanceInput = e.currentTarget.elements[1] as HTMLInputElement;
        const timeInput = e.currentTarget.elements[2] as HTMLInputElement;
        const gpxInput = e.currentTarget.elements[3] as HTMLInputElement;
        const imagesInput = e.currentTarget.elements[4] as HTMLInputElement;
        const aboutInput = e.currentTarget.elements[5] as HTMLInputElement;

        const bodyResult = {
            title: titleInput.value,
            distance: distanceInput.value,
            time: timeInput.value,
            tags: tags,
            likes: [],
            gpx: "gpxInput.files",
            images: "imagesInput.files",
            about: aboutInput.value,
        }

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "https://iaeround-backend.vercel.app",
                "Access-Control-Allow-Methods": "POST"      
        },
            body: JSON.stringify({ bodyResult })
        };
        fetch('https://iaeround-backend.vercel.app/api/route', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return(
        <FormContainer>
            <Form onSubmit={(e) => formSubmit(e)}>
                <TopGrid>
                    <TopFlexbox>
                        <InputField title="Title"/>
                        <InputField placeholder="km" title="Distance" onlyNumbers={true} />
                        <InputField placeholder="minutes" title="Time" onlyNumbers={true}/>
                    </TopFlexbox>

                    <TopFlexbox>
                        <InputField title="GPX" type="file" isGPX={true}/>
                        <InputField title="Images" type="file" imageFiles={true}/>
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

                <InputField title="About" placeholder="Write something about this route" type="textfield"/>
                <Button>Create Route</Button>
            </Form>
        </FormContainer>
    )
}

export default CreateRoute;