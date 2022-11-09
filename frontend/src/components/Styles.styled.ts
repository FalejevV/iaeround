import { Link } from "react-router-dom";
import styled, { css }  from "styled-components";
import { IToggle } from "../interfaces";

export const Container = styled.div`
    max-width: 1440px;
    overflow: hidden;
    height:100%;
    width:100%;
    margin: 0 auto;
    padding:15px 20px;
    position:relative;
`

export const Button = styled.button`
    background: linear-gradient(202.18deg, #3E6144 -7.99%, #6FAD7A 104.42%);
    border-radius: 5px;
    padding:10px 15px;
    cursor:pointer;
    font-size: 16px;
    color:white;
    display:flex;
    align-items:center;
    justify-content: center;
    gap:10px;
    transition: all 0.3s;
    white-space:nowrap;
    &:hover{
        filter:brightness(1.1);
    }

    @media(max-width:850px){
        padding:8px 10px;
        font-size: 14px;
    }
`

export const LinkText = styled(Link)`
    color:black;
    font-size: 16px;
    transition: all 0.3s;
    
    &:hover{
        opacity: 0.6;
    }
`


export const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:10px;
    padding:0px 15px;
`

export const TextMessage = styled.p<IToggle>`
    width:100%;

    padding:10px;
    background-color: transparent;
    font-size:16px;
    border-radius:5px;

    border:2px solid #279d00;
    color: #279d00;

    ${({ toggle }) => !toggle && css`
        border:2px solid #9d0000;
        color: #9d0000;
    `}
`