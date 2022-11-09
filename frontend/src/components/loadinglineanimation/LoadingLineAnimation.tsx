import { AnimationContainer } from "./LoadingLineAnimation.styled";

import loaidingLineGif from "../../img/LineLoading.gif";

function LoadingLineAnimation(){
    return(
        <AnimationContainer src={loaidingLineGif} alt="loading" />
    )
}

export default LoadingLineAnimation;