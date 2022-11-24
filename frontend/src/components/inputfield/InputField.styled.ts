import styled, { css } from "styled-components";
import { IFilledOk, IHidden } from "../../interfaces";

export const InputContainer = styled.div<{displayImages?:boolean}>`
    display: flex;
    flex-direction: column;
    gap:10px;
    width:100%;
    position:relative;

    ${({displayImages}) => displayImages && css`
        padding-bottom: 100px;
    `}
`

export const Label = styled.label`
    font-size: 18px;
    display: flex;
    flex-direction: column;
    gap:5px;
    width:100%;
    height:100%;
`

export const Input = styled.input<IHidden>`
    font-size: 18px;
    padding:10px 15px;
    border:2px solid #d6d6d6;
    border-radius: 5px;

    ${({ hidden }) => hidden && css`
        display:none;
    `}
`

export const AlertText = styled.p`
    color:#9d0000;
    font-size: 13px;
`

export const FileInput = styled.input`
    display:none;
`

export const FileSvg = styled.svg<IFilledOk>`
    margin-top: 5px;
    width:100%;
    height:100%;
    max-height:48px;
    padding:10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    cursor:pointer;

    transition: all 0.3s;
    &:hover{
        background-color: ${({ theme }) => theme.accentColor};
        fill:white;
    };

    ${({ toggle }) => toggle && css`
        background-color: #33a30e;
        fill:white;
    `}

    ${({ ok }) => !ok && css`
    background-color: #b00000;
        fill:white;
    `}
`
export const ImageDisplayContainer = styled.div`
    max-width: 300px;
    position:absolute;
    top: 100px;
    left:0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width:100%;
    gap:5px;
    overflow-x:scroll;
    scrollbar-width: thin;  
    padding-bottom: 10px;
`
export const ImageDisplay = styled.img`
    width:100px;
    height:100px;
    object-fit: cover;
    border:1px solid black;
    border-radius: 5px;
`

export const TextField = styled.textarea`
    font-size: 18px;
    padding:10px 15px;
    border:2px solid #d6d6d6;
    border-radius: 5px;
    resize: none;
    height:200px;
`