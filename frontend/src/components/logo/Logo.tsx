import { LogoImage, LogoLink } from "./Logo.styled";

function Logo(props:{
    to:string,
    src:string,
    srcSmall:string,
})
{
    return(
        <LogoLink to={props.to}>
            <picture>
                <source media="(max-width:625px)" srcSet={props.srcSmall} />
                <LogoImage alt="logo" src={props.src}/>
            </picture>
        </LogoLink>
    )
}

export default Logo;