import styled from 'styled-components';
import { Container } from '../components/Styles.styled';

export const FormContainer = styled(Container)`
    width:650px;
`

export const Form = styled.form`
    padding-top: 170px;
    width:100%;

    display: flex;
    flex-direction: column;
    gap:15px;
`

export const TopGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.6fr;
    gap:10px;
    column-gap:30px;
    padding-bottom: 15px;
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