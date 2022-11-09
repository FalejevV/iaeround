import styled from "styled-components";
import { CardsLoadButton, CGrid } from "../cardgrid/CardGrid.styled";
import { Container } from "../Styles.styled";

export const CustomCardGridContainer = styled(Container)<{first:boolean}>`
    width:100%;
    display: flex;
    flex-direction: column;

    ${({ first }) => first && `
        padding-top: 100px;
    `}
`

export const GridTitle = styled.p`
    font-size: 20px;
`

export const RouteGrid = styled(CGrid)`
    margin-top: 25px;
`

export const CustomLoadMore = styled(CardsLoadButton)`
    margin-top: 10px;
`

export const NothingText = styled.p`
    font-size: 25px;
    white-space: nowrap;
    color:#676767;
    opacity: 0.4;
    font-style: italic;
`