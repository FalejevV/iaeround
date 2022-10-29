import styled from "styled-components";

export const CardContainer = styled.div`
    width:100%;
    height:405px;
    background-color: #D9D9D9;
    cursor:pointer;
    display: flex;
    flex-direction: column;
    position:relative;
`

export const CardImage = styled.img`
    width:100%;
    height: 270px;
    min-height: 200px;
    object-fit: cover;
    background-color: #C5C5C5;
    text-decoration: none;
    display: block;
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
`

export const InfoObject = styled.div`
    display: flex;
    gap:2px;
    align-items: center;
    align-content: center;
    opacity:0.7;
`

export const CardLikes = styled.div`
    position: absolute;
    width:75px;
    height:30px;
    background-color: transparent;
    top: 0px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:5px;
    opacity: 1;
    padding:0px 10px;
    background-color: rgb(0,0,0,0.4);
    border-radius: 0px 0px 0px 5px;
`


export const LikesSVG = styled.svg`
    ${({ theme }) => theme && `
        fill:${theme.accentColor}
    `}
    
`

export const LikesText = styled.p`
    font-size: 14px;
    color:white;
`