import styled from 'styled-components';
import { Button, Container } from '../components/Styles.styled';

export const FormContainer = styled(Container)`
    max-width: 650px;
    width:100%;

    ${Button}{
        display: block;
        margin: 0 auto;
        margin-top:15px;
        max-width: 222px;
        width:100%;
        height:50px;
        font-size: 18px;
    }
`

export const Form = styled.form`
    padding-top: 170px;
    width:100%;

    display: flex;
    flex-direction: column;
    gap:15px;

    @media(max-width:850px){
        padding-top: 120px;
    }

    @media(max-width:350px){
        padding-top: 100px;
    }
`

export const TopGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.6fr;
    gap:10px;
    column-gap:30px;
    padding-bottom: 15px;

    @media(max-width: 850px){
        grid-template-columns: 1fr;
    }
`

export const TopFlexbox = styled.div`
    display: flex;
    flex-direction: column;
    gap:15px;
`
export const TagsAboutContainer = styled.div`
    width:100%;
`

export const TagsContainer= styled.div`
    margin-top: 10px;
    width:100%;
    padding:10px;
    border:2px solid #d6d6d6;
    border-radius: 5px;
    height:fit-content;
    display: flex;
    gap:10px;
    display: flex;
    flex-wrap: wrap;
`

export const TagClickContainer = styled.div`
    
`