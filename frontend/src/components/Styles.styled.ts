import { Link } from "react-router-dom";
import styled  from "styled-components";

export const Container = styled.div`
    max-width: 1440px;
    height:100%;
    width:100%;
    margin: 0 auto;
    padding:15px 20px;
    position:relative;
    @media(max-width:350px){
        padding:5px 10px;
    }
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