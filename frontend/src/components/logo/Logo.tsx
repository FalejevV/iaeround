import { useAppDispatch } from "../../app/hooks";
import { Order } from "../../enums";
import { clearTags, setOrder, setSearchInput } from "../../features/SearchFilter";
import { LogoImage, LogoLink } from "./Logo.styled";

function Logo(props:{
    to:string,
    src:string,
    srcSmall:string,
})
{
    const dispatch = useAppDispatch();

    function dropSearches(){
        dispatch(setSearchInput(""));
        dispatch(setOrder(Order.NEW));
        dispatch(clearTags());
    }
    return(
        <LogoLink to={props.to} onClick={dropSearches}>
            <picture>
                <source media="(max-width:625px)" srcSet={props.srcSmall} />
                <LogoImage alt="logo" src={props.src}/>
            </picture>
        </LogoLink>
    )
}

export default Logo;