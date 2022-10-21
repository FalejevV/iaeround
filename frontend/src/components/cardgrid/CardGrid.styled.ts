import styled, { css } from "styled-components";
import { ISearchView } from "../../interfaces";

export const CGrid = styled.div<ISearchView>`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    width:100%;
    gap:10px;

    margin-top:100px;
    transition: all 0.3s;
    ${({ extended }) => extended && css`
        margin-top:160px;
    `}

`