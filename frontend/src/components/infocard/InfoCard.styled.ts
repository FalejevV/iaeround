import styled, { css, keyframes } from "styled-components";
import { IToggle } from "../../interfaces";

const fadeInAnimation = keyframes`
    from{
        opacity: 0;
    }to{
        opacity: 1;
    }
`

const fadeOutAnimation = keyframes`
    from{
        opacity: 1;
    }to{
        opacity: 0;
    }
`


export const ImageSlideHoverContainer = styled.div`
    width:100%;
    height:270px;
    position:absolute;
    top:0px;
    left:0px;

    display:grid;
    grid-auto-flow:column;
    gap:15px;
    z-index:100;
    opacity:0;
    animation: ${fadeOutAnimation} 0.3s forwards;
`

export const CardContainer = styled.div`
    width:100%;
    height:405px;
    background-color: #D9D9D9;
    cursor:pointer;
    display: flex;
    flex-direction: column;
    position:relative;
    max-width:600px;
    box-shadow: 0px 5px 5px rgba(0,0,0,0.1);
    border-radius: 5px;
    overflow:hidden;
    
    &:hover{
        ${ImageSlideHoverContainer}{
            display:grid;
            animation: ${fadeInAnimation} 0.3s forwards;
        }
    }
`

export const CardImage = styled.img`
    width:100%;
    height:100%;
    min-height: 200px;
    object-fit: cover;
    background-color: #C5C5C5;
    text-decoration: none;
    display: block;
    position: relative;
`


export const ImageContainer = styled.div`
    width:100%;
    height: 270px;
    overflow:hidden;
`


export const ImageSlideHoverIndicator = styled.div<IToggle>`
    height:100%;
    width:100%;
    position:relative;
    &:after{
        transition: all 0.3s;
        content:"";
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:5px;
        background-color: ${({ theme }) => theme.accentColor};
        border-radius:0px 0px 5px 5px;
        border:4px solid black;
        border-top:0px;
        z-index:200;

        ${({ toggle }) => toggle && css`
            background-color: white;
        `}
    }
`


export const CardText = styled.p`
    color:black;
    font-size:16px;
`

export const CardTitle = styled(CardText)`
    flex:auto;
    font-size: 17px;
`
export const DistanceSVG = styled.svg`
`

export const TimeSVG = styled.svg`

`

export const InfoObjectContainer = styled.div`
    display: flex;
    align-content: center;
    padding:15px;
    gap:15px;
    position:relative;
    z-index: 100;
`

export const InfoObject = styled.div`
    display: flex;
    gap:2px;
    align-items: center;
    align-content: center;
    opacity:0.7;
    position:relative;
    z-index: 100;
`


export const CardLikes = styled.div`
    position: absolute;
    height:30px;
    background-color: transparent;
    bottom: 5px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:5px;
    opacity: 1;
    padding:0px 10px;
    border-radius: 0px 0px 0px 5px;
`


export const LikesSVG = styled.svg`
    ${({ theme }) => theme && css`
        fill: theme.accentColor;
    `}
    position:relative;
`

export const LikesText = styled.p`
    font-size: 14px;
    ${({ theme }) => theme && css`
        color: theme.accentColor;
    `}
`