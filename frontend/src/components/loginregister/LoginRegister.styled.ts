import { Link } from "react-router-dom";
import styled from "styled-components";

export const LRContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex:auto;
    align-content: center;
`

export const LRLink = styled(Link)`
    font-size: 20px;
    background-color: transparent;
    white-space: nowrap;
    border: 2px solid ${({ theme }) => theme.accentColor || "black"};
    color:${({ theme }) => theme.accentColor || "black"};
    padding:10px 25px;
    border-radius:5px;

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
        padding:8px 20px;
        font-size: 17px;
    }

    @media(max-width:450px){
        padding:10px 10px;
        font-size: 14px;
    }
`