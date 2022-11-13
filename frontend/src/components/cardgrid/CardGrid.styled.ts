import styled from "styled-components";

export const CGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    width:100%;
    gap:10px;
    max-width: 100vw;
    margin-top:180px;
    overflow:hidden;
    transition: all 0.3s;
    position:relative;
    padding-bottom: 15px;
    @media(max-width: 1300px){
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        justify-content: center;
        align-content: center;
        gap:20px;
    }

    @media(max-width: 850px){
        grid-template-columns: 1fr;
    }
`

export const CardsLoadButton = styled.button`
    width:200px;
    height:40px;
    background-color: ${({ theme }) => theme.accentColor};
    border-radius: 5px;
    color:white;
    font-size: 18px;
    cursor: pointer;
    display:block;
    margin: 0 auto;
    margin-top: 30px;
`

export const NotFoundText = styled.p`
    width:100%;
    padding-top:20px;
    text-align: center;
    color:${({theme }) => theme.accentColor};
    font-size: 20px;
`