import { AnimationContainer } from "./LoadingAnimation.styled";

import loaidingGif from "../../img/Loading-gif.gif";

function LoadingAnimation(){
    return(
        <AnimationContainer src={loaidingGif} alt="loading" />
    )
}

export default LoadingAnimation;