import React from "react";
import InputField from "../components/inputfield/InputField";
import { Label } from "../components/inputfield/InputField.styled";
import Tag from "../components/tag/Tag";
import { Form, FormContainer, TagClickContainer, TagsAboutContainer, TagsContainer, TopFlexbox, TopGrid } from "./CreateRoute.styled";
import LoadingAnimation from "../components/loadinganimation/LoadingAnimation";

function CreateRoute(props:{
    headerExtend:any
}){
    const [tagDatabase, setTagDatabase] = React.useState<{id:number,title:string}[]>([]);
    const [connectionError, setConnectionError] = React.useState("");
    const [tags, setTags] = React.useState<string[]>([]);

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

    return(
        <FormContainer>
            <Form>
                <TopGrid>
                    <TopFlexbox>
                        <InputField title="Title"/>
                        <InputField placeholder="km" title="Distance" onlyNumbers={true} />
                        <InputField placeholder="minutes" title="Time" onlyNumbers={true}/>
                    </TopFlexbox>

                    <TopFlexbox>
                        <InputField title="GPX" type="file"/>
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
            </Form>
        </FormContainer>
    )
}

export default CreateRoute;