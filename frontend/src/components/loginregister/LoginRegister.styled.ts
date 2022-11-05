import { Link } from "react-router-dom";
import styled from "styled-components";

export const SVGKeyIcon = styled.svg`
    width:42px;
    height:40px;
    background-color: transparent;
    border-radius: 5px;
    padding:8px;
    padding-bottom: 9px;
    border: 2px solid ${({ theme }) => theme.accentColor || "black"};
    fill: ${({ theme }) => theme.accentColor || "black"};

    display: none;
`

export const LRLink = styled.button`
    font-size: 18px;
    background-color: transparent;
    white-space: nowrap;
    border: 2px solid ${({ theme }) => theme.accentColor || "black"};
    color:${({ theme }) => theme.accentColor || "black"};
    padding:8px 25px;
    border-radius:5px;
    cursor: pointer;
    transition:all 0.3s;

    position: relative;
    overflow: hidden;
    &:after{
        content:"";
        border-radius: 5px;
        background-color: ${({ theme }) => theme.accentColor || "green"};
        position:absolute;
        width:0px;
        height:0px;
        left:50%;
        top:50%;
        z-index: -1;
        transform: translate(-50%,-50%);
        transition:all 0.3s;
        filter:blur(5px);
    }

    &:hover{
        color:white;
        &:after{
            width:200%;
            height:200%;  
            transition:all 0.8s; 
        }
    }

    @media(max-width:850px){
        padding:6px 20px;
        font-size: 17px;
    }

    @media(max-width:550px){
        display: none;
    }
`



export const LRContainer = styled(Link)`
    display: flex;
    justify-content: flex-end;
    flex:auto;
    align-content: center;
    align-items: center;

    @media(max-width:550px){
        ${SVGKeyIcon}{
            display: block;
        }
    }
`