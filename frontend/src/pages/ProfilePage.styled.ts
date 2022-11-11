import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../components/Styles.styled";

export const ProfileContainer = styled(Container)`
    padding-top: 160px;

    @media(max-width:950px){
        padding-top: 130px;
    }

    @media(max-width:625px){
        padding-top: 125px;
    }
`

export const ProfileInfo = styled.div`
    margin: 0 auto;
    width:880px;
    display: flex;
    justify-content: flex-start;
    position: relative;
    transition: all 0.3s;
    @media(max-width:1150px){
        width:650px;
    }

    @media(max-width:950px){
        width:550px;
    }

    @media(max-width:650px){
        width:100%;
    }

    @media(max-width:625px){
        flex-wrap:wrap;
    }
`

export const Avatar = styled.img`
    width: 150px;
    height:150px;
    border-radius:50%;
    padding:25px;
    background-color: rgba(0,0,0,0.1);

`

export const StatText = styled.p`
    font-size: 18px;
    white-space:nowrap;
    font-style: italic;
    position:relative;
`

export const Stats = styled.div`
    padding: 10px 20px;
    width:150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap:10px;
    position:relative;
    ${StatText}{
        &:first-child{
            font-size: 20px;
            font-style: unset;
            font-weight: 700;
        }
    }
`

export const FlexPusher = styled.div`
    flex:auto;

    @media(max-width:625px){
        display:none;
    }
`

export const AboutText = styled.p`
    font-style: italic;
    font-size: 18px;
    color:#3c3c3c;
    height:100%;
    padding-top: 27px;
    padding-right: 30px;

    @media(max-width:625px){
        flex:auto;
        width:100%;
        text-align: center;
        padding:10px;
        padding-top: 30px;
    }

`

export const AvatarStatsContainer = styled.div`
    display:flex;
    align-items: center;
    position:relative;
    flex:auto;
    @media(max-width:625px){
        flex:auto;
        justify-content: center;
    }

`


export const EditProfileText = styled.p`
    position:absolute;
    white-space: nowrap;
    top:5px;
    overflow:hidden;
    right:35px;
    color: ${({ theme }) => theme.accentColor}
    pointer-events:none;
    cursor:default;
    width:0px;
    opacity: 0;
    transition: all 0.3s;

    @media(max-width:950px){
        display: none;
    }

`

export const EditProfileLink = styled(Link)`
    font-weight: 500;
    position:absolute;
    left:-165px;
    top:-30px;
    color: ${({ theme }) => theme.accentColor};

    &:hover{
        ${EditProfileText}{
            width:90px;
            opacity: 1;
        }
    }
`

export const EditProfileSVG = styled.svg`
    width:35px;
    height:35px;
    fill: rgba(0,0,0,0.3);

    transition: all 0.3s;
    
    &:hover{
        fill: rgba(0,0,0,0.7);
    }
`

export const SpacerLine = styled.hr`
    margin: 0 auto;
    margin-top: 55px;
    width:60px;
    height:1px;
    border-bottom:10px solid rgba(0,0,0,0.2);
    border-style: dotted;
`