import styled, { css } from "styled-components";
import { ITag } from "../../interfaces";


export const TagCloseSVG = styled.svg`
    display: none;
    width:18px;
    height:18px;
    transition:  all 0.3s;
`


export const TagContainer = styled.b<ITag>`
    padding: 5px 10px;
    background-color: transparent;
    display: flex;
    align-items: center;
    border-radius: 0px 5px 0px 5px;
    gap:5px;
    border:1px solid #5f5f5f;
    user-select: none;
    font-weight: 400;
    ${({ clickable }) => clickable && css`
        cursor: pointer;
    `}

    ${({ deletable }) => deletable && css`
        ${TagCloseSVG}{
            display: block;
        }
    `}

    ${({ chosen }) => chosen && css`
        background-color: #d1ebcf;
    `}

    transition: all 0.3s;
    &:hover{
        background-color: rgb(0,0,0,0.05);
        ${TagCloseSVG}{
            transform: scale(1.3);
        }

        ${({ chosen }) => chosen && css`
            background-color: #aedcab;
        `}

    }

    cursor: pointer;
`

export const TagText = styled.b`
    text-align: center;
    font-size: 14px;
    white-space: nowrap;
    font-weight: 400;
`

