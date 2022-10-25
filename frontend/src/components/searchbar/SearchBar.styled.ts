
import styled from "styled-components";

export const Container = styled.form`
    max-width: 430px;
    width:100%;
    height:40px;
    background-color: white;
    position:relative;
    overflow:hidden;
    display: flex;
    align-items: center;
    border:2px solid #d6d6d6;
    border-radius: 5px;
    z-index: 5;

`

export const SearchSVG = styled.svg`
    position: absolute;
    width:40px;
    height:40px;
    padding:12px;
    cursor:pointer;
    z-index: 2;
    transition: all 0.3s;
    fill: #a6a6a6;
    
    &:hover{
        transform: scale(1.2);
        fill: #484848;
    }

    @media(max-width:600px){
        width:23px;
        height:23px;
        padding:5px;
        left:5px;
    }
`

export const SearchInput = styled.input`
    position: absolute;
    width:100%;
    height:100%;
    background-color:white;
    padding-left:45px;
    padding-right: 45px;

    @media(max-width:800px){
        padding-left: 35px;
        padding-right: 5px;
    }

    @media(max-width:600px){
        padding-left: 30px;
    }
    
`

export const CloseSVG = styled(SearchSVG)`
    right:0px;
    left: unset;

    @media(max-width:800px){
        display: none;
    }
`
