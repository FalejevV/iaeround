import styled, { css } from "styled-components";
import { IToggle } from "../../interfaces";

export const SortButtonsContainer = styled.div`
    max-width: 200px;   
    display: flex;
    align-items: center;
    gap:20px;
`

export const SortButton = styled.div<IToggle>`
    color:#353535;
    transition: all 0.3s;
    font-size: 16px;
    white-space: nowrap;
    padding:5px 0px;
    cursor:pointer;
    &:hover{
        color:#000000;
    }

    ${({ toggle }) => toggle && css`
        color:#3E6144;
        transform: scale(1.15);
        
        &:hover{
            color:#3E6144;
        }
    `}
`