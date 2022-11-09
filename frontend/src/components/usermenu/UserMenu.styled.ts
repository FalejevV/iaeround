import styled, { css } from "styled-components";
import { IToggle } from "../../interfaces";
import { Button, LinkText } from "../Styles.styled";



export const MenuContainer = styled.div`
    width:100%;
    height:fit-content;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap:20px;
    margin-left: auto;

    @media(max-width:850px){
        gap:10px;
        width:auto;
    }

    @media(max-width:380px){
        gap:5px;

        ${Button}{
            padding:5px;
        }
    }
`

export const PlusSVG = styled.svg`
    fill:white;
`

export const DropdownContainer = styled.div<IToggle>`
    position:absolute;
    width:120px;
    height:fit-content;
    background-color:white;
    border-radius: 5px;
    border: 1px solid #000000;
    padding:20px;
    top:35px;
    right:-2    0px;
    display: none;
    flex-direction: column;
    gap:15px;
    z-index: 10;
    transition: all 0.3s;

    ${LinkText}:first-child{
        display: none;

        @media(max-width:625px){
            display: block;
            position:absolute;
            right:20px;
            top:20px;
            color:#949494;
            font-size: 18px;
        }
    }

    @media(max-width:625px){
        height:240px;
        position:fixed;
        display: flex;
        top:unset;
        bottom:-280px;
        right:unset;
        left:0px;
        width:100vw;

        padding: 40px;
        padding-top: 80px;

        ${LinkText}{
            font-size: 24px;
        }
    }
    ${({ toggle }) => toggle && css`
        display: flex;

        @media(max-width:625px){
            bottom: 0px;
        }

    `}

    
`

export const UserNameText = styled.p`
    font-size: 16px;
    color:black;

    @media(max-width:625px){
        display: none;
    }
`

export const DropdownSVG = styled.svg`
    fill:black;

    @media(max-width:625px){
        display: none;
    }
`

export const ProfileImage = styled.img`
    width:70px;
    height:70px;
    border-radius: 50%;
    padding: 5px;
    ${({ theme }) => theme && css`
        border:3px solid ${theme.accentColor};
    `}
    cursor:pointer;

    @media(max-width:850px){
        width:50px;
        height:50px;
    }

    @media(max-width:350px){
        width:40px;
        height:40px;
    }

`

export const UserNameContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap:2px;
    cursor:pointer;
    position:relative;
    user-select: none;
`

export const DropdownDisabler = styled.div<IToggle>`
    display: none;
    width:100vw;
    height:100vh;
    position:fixed;
    left:0px;
    top:0px;
    background-color: black;
    opacity:0;
    transition: all 0.3s;
    z-index: 5;
    pointer-events:none;
    @media(max-width:625px){
        display: block;
        
        ${({ toggle }) => toggle && css`
            pointer-events:all;
            opacity: 0.5;
        `}
    }
`