
import { TagContainer } from "../Styles.styled";
import Tag from "../tag/Tag";
import { CardContainer, CardImage, CardLikes, CardText, CardTitle, DistanceSVG, InfoObject, InfoObjectContainer, LikesSVG, LikesText, TimeSVG } from "./InfoCard.styled";

function InfoCard(props:{
    title:string,
    distance:number,
    time:number,
    tags:string[],
    likes:string[],
}){
    return(
        <CardContainer>
            <CardImage alt="info card" src="" />
            <InfoObjectContainer>
                <CardTitle>{props.title}</CardTitle>
                <InfoObject>
                    <DistanceSVG viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/><path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                    </DistanceSVG>
                    <CardText>{props.distance}km</CardText>
                </InfoObject>
                <InfoObject>
                    <TimeSVG viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"/>
                    </TimeSVG>
                    <CardText>{props.time}min</CardText>
                </InfoObject>
            </InfoObjectContainer>
            <TagContainer>
                {props.tags.map((tag:string) => <Tag key={tag} title={tag} clickable={true}/>)}
            </TagContainer>
            <CardLikes>
                <LikesSVG viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0H24V24H0z"/><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"/>
                </LikesSVG>
                <LikesText>
                    200
                </LikesText>
            </CardLikes>
        </CardContainer>
    )
}

export default InfoCard;