import { GalleryContainer, ImageOverflowSlider, ImageShowcaseDisplay, ImageSlider, ImageSliderContainer, SliderArrowSVGLeft, SliderArrowSVGRight, SliderImage } from "./GallerySlider.styled"
import { routeImageURL } from "../../UsefulFunctions";
import React from "react";

function GallertSlider(props:{
    images:string[],
    routeId:string,
}){

    const [currentImage, setCurrentImage] = React.useState<number>(0);

    function switchImage(id:number){
        if(id >= 0 && id < props.images.length){
            setCurrentImage(id);
        }else{
            setCurrentImage(0);
        }
    }

    function slideImage(increment:number){
        if(currentImage + increment < 0){
            setCurrentImage(0);
        }else if ((currentImage + increment) > props.images.length -1 ){
            setCurrentImage(props.images.length -1);
        }else{
            setCurrentImage(prevImage => prevImage + increment);
        }
    }
    return(
        <GalleryContainer>
            <ImageShowcaseDisplay src={routeImageURL(props.routeId,props.images[currentImage])} />
            <ImageSlider>
                <SliderArrowSVGLeft onClick={() => slideImage(-1)} toggle={currentImage > 0} viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
                </SliderArrowSVGLeft>
                <ImageOverflowSlider>        
                    <ImageSliderContainer slideCount={currentImage}>
                        {props.images.map((image:string, index:number) => <SliderImage key={index} toggle={index === currentImage} onClick={() => switchImage(index)} src={routeImageURL(props.routeId,image)} />)}
                    </ImageSliderContainer>
                </ImageOverflowSlider>
                <SliderArrowSVGRight onClick={() => slideImage(1)} toggle={currentImage < props.images.length -1} viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
                </SliderArrowSVGRight>
            </ImageSlider>
        </GalleryContainer>
    )
}

export default GallertSlider;