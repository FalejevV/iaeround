import styled, { css } from "styled-components";
import { IToggle } from "../../interfaces";

export const SortButtonsContainer = styled.div`
    max-width: 200px;   
    display: flex;
    align-items: center;
    gap:20px;
`

export const SortButton = styled.div<IToggle>`
    color:black;
    transition: all 0.3s;
    font-size: 16px;
    white-space: nowrap;
    cursor:pointer;
    &:hover{
        opacity: 0.5;
    }

    ${({ toggle }) => toggle && css`
    
    `}


    @media(max-width:850px){
        font-size:14px;
    }
`