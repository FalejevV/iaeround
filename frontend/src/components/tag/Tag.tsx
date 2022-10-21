import { TagCloseSVG, TagContainer, TagText } from "./Tag.styled";

function Tag(props:{
    title:string,
    clickable?: boolean,
    deletable?: boolean,
})
{
    return(
        <TagContainer clickable={props.clickable || false} deletable={props.deletable || false}>
            <TagText>
                {props.title}
            </TagText>
            <TagCloseSVG viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
            </TagCloseSVG>
        </TagContainer>
    )
}

export default Tag;