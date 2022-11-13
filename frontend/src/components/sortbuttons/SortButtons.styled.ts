import styled, { css } from "styled-components";
import { IToggle } from "../../interfaces";

export const SortButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap:30px;
`


export const SortArrowSVG = styled.svg<IToggle>`
    width:20px;
    height:20px;
    ${({ toggle }) => toggle && css`
        transform: translateY(5px) translateX(4px) rotate(180deg);
    `}
`


export const SortButton = styled.div<IToggle>`
    color:#353535;
    transition: all 0.3s;
    font-size: 16px;
    white-space: nowrap;
    padding:5px 0px;
    cursor:pointer;
    display: flex;
    align-items: center;
    &:hover{
        color:#000000;
    }

    ${({ toggle,theme }) => toggle && css`
        color:${theme.accentColor};
        transform: scale(1.15);
        ${SortArrowSVG}{
            fill: ${theme.accentColor};
        }
        &:hover{
            color:${theme.accentColor};
        }
    `}
`


export const SortText = styled.p`
    width:30px;
    padding-left:5px;
    font-size: 14px;
    color:black;
    color: ${({ theme }) => theme.accentColor};
`