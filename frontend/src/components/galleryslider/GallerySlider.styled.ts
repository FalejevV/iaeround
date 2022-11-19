import styled, { css } from "styled-components";
import { IToggle } from "../../interfaces";

export const GalleryContainer = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
    gap:15px;
    justify-content: flex-start;
    align-items: center;
    user-select: none;
`

export const ImageShowcaseDisplay = styled.img`
    width:100%;
    height:450px;
    object-fit:cover;
    border-radius: 5px;
    box-shadow: 0px 5px 5px rgba(0,0,0,0.6);
`
export const ImageSlider = styled.div`
    display: flex;
    width:100%;
    justify-content: center;
    align-items: center;
    gap:20px;
`

export const ImageOverflowSlider = styled.div`
    width:100%;
    overflow:hidden;
    position: relative;
    height:110px;
`
interface ISlider{
    slideCount:number;
}
export const ImageSliderContainer = styled.div<ISlider>`
    height:100%;
    max-height: 110px;
    overflow-x: scroll;
    justify-content: flex-start;
    display: flex;
    gap:20px;
    overflow-y:hidden;
    scrollbar-width: none;
    position: absolute;
    left:36%;
    top:0px;
    transition: all 0.3s;

    ${({ slideCount }) => slideCount && css`
        left:calc(36% - (200px * ${slideCount}));
    `}
`

export const SliderImage = styled.img<IToggle>`
    width:180px;
    height:110px;
    object-fit:cover;
    cursor:pointer;
    border:3px solid none;
    border-radius: 5px;
    ${({ toggle }) => toggle && css`
        border: 3px solid ${({ theme }) => theme.accentColor};
    `}
`

export const SliderArrowSVGLeft = styled.svg<IToggle>`
    width:60px;
    height:60px;
    transform:rotate(180deg);
    padding:12px;
    cursor:pointer;
    opacity:0.2;
    transition: all 0.3s;
    ${({ toggle }) => toggle && css`
    opacity:1;
    `}
`

export const SliderArrowSVGRight = styled(SliderArrowSVGLeft)`
    transform:rotate(0deg);
`