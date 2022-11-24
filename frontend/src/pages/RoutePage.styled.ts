import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { Button, TagContainer } from "../components/Styles.styled";
import { IToggle } from "../interfaces";
import { ProfileContainer } from "./ProfilePage.styled";

const fadeIn = keyframes`
    0%{
        opacity:1;
    }
    50%{
        opacity:0;
    }
    100%{
        opacity:0;
        pointer-events: none;
    }
`

export const LoadFader = styled.div`
    position:absolute;
    width:100vw;
    height:100vh;
    background-color:white;
    left:0px;
    top:0px;
    z-index:500;
    opacity:1;

    animation:${fadeIn} 0.3s forwards;
    animation-delay:0.3s;
`

export const RoutePageContainer = styled(ProfileContainer)`
    
`

export const RouteInfoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width:100%;
    gap:40px;
`

export const RouteRightSideInfo = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap:15px;
    padding-top:60px;
    max-width: 550px;
`

export const RouteTitle = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
`

export const InfoIconsContainer = styled.div`
    display: flex;
    gap:15px;
    align-items: center;
`

export const RouteAboutText = styled.p`
    padding-top:30px;
    
`

export const RouteTags = styled(TagContainer)`
    padding:0px;
    padding-top:15px;
`

export const DownloadLikeContainer = styled.div`
    width:100%;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    padding-top:10px;
    gap:80px;
`

export const ButtonTipContainer = styled.div`
    position: relative;
`

export const DownloadButton = styled(Button)`
    width:200px;
    height:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:15px;
    border-radius: 5px;
    font-size:16px;
    position: relative;
`

export const DownloadSVG = styled.svg`
    fill:white;
`

export const GPXTip = styled.svg`
    position: absolute;
    width:40px;
    height:40px;
    background: linear-gradient(173.74deg, #5E5F44 4.97%, #DFC37A 121.95%);
    border-radius: 0px 5px 5px 0px;
    top:50%;
    transform: translateY(-50%);
    right:-40px;
    font-size:16px;
    fill:white;
    padding:10px;

    cursor: pointer;
    transition: all 0.3s;
    &:hover{
        filter:brightness(1.1);
    }
`

export const LikeContainer = styled.div`
    width:100%;
    height:fit-content;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    cursor:pointer;
    gap:5px;
`

export const LikeSVG = styled.svg`
    fill:${({ theme }) => theme.accentColor};
    width:30px;
    height:30px;
`

export const LikeFill = styled.path<IToggle>`
    opacity: 0;
    transition: all 0.3s;

    ${({ toggle }) => toggle && css`
        opacity:1;
    `}
`

export const LikeText = styled.p`
    font-size: 17px;
    color:${({ theme }) => theme.accentColor};
    font-weight: bold;
`

export const LikeErrorText = styled.p`
    text-align: center;
    position: absolute;
    font-size: 16px;
    color:#aa0000;
    top:40px;
    transform: translateX(-20%);
    pointer-events:none;
    white-space: nowrap;
`

export const EditRouteButton = styled(Link)`
    position: absolute;
    font-size: 15px;
    padding:3px 15px;
    top:0px;
    right:0px;
    border-radius:5px;
    background-color:transparent;
    color:${({ theme }) => theme.accentColor};
    border:2px solid ${({ theme }) => theme.accentColor};

    cursor: pointer;
    transition: all 0.3s;
    &:hover{
        background-color: rgba(0,100,0,0.1)
    }
`

export const SimmilarRoutesContainer = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    padding-top:100px;
`