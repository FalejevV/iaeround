import { LogoImage, LogoLink } from "./Logo.styled";

function Logo(props:{
    to:string,
    src:string,
}){
    return(
        <LogoLink to={props.to}>
            <LogoImage src={props.src}/>
        </LogoLink>
    )
}

export default Logo;