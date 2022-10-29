import React from "react";
import InputField from "../components/inputfield/InputField";
import { Label } from "../components/inputfield/InputField.styled";
import Tag from "../components/tag/Tag";
import { Form, FormContainer, TagClickContainer, TagsAboutContainer, TagsContainer, TopGrid } from "./CreateRoute.styled";


function CreateRoute(props:{
    headerExtend:any
}){

    React.useEffect(() => {
        props.headerExtend(false);
    });

    const [tags, setTags] = React.useState<string[]>([]);

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
                    <InputField title="Title" />
                    <InputField title="GPX" type="file"/>
                    <InputField placeholder="km" title="Distance" />
                    <InputField title="Images" type="file"/>
                    <InputField placeholder="minutes" title="Time" />
                </TopGrid>
                <TagsAboutContainer>
                    <Label>Tags</Label>
                    <TagsContainer>
                        <TagClickContainer onClick={() => triggerTag("Forest")}>
                            <Tag title="Forest" chosen={tags.includes("Forest")}/>
                        </TagClickContainer>
                    </TagsContainer>
                </TagsAboutContainer>
            </Form>
        </FormContainer>
    )
}

export default CreateRoute;