import Logo from "../logo/Logo";
import SearchBar from "../searchbar/SearchBar";
import SortButtons from "../sortbuttons/SortButtons";
import { FilterTagBar, FilterTagBarContainer, HeaderContainer, TopBar, TopBarContainer } from "./Header.styled";
import LogoImage from "../../img/Logo.svg";
import LogoSmall from "../../img/LogoSmall.svg";

import UserMenu from "../usermenu/UserMenu";
import { TagContainer } from "../Styles.styled";
import Tag from "../tag/Tag";

function Header(props:{
    displayFilters?: boolean,
    profileImage:string,
    extended?:boolean,
}){
    return(
        <HeaderContainer>
            <TopBar extended={props.extended || false}>
                <TopBarContainer>
                    <Logo srcSmall={LogoSmall} src={LogoImage} to="/" />
                    <SearchBar />
                    <UserMenu profileImage={props.profileImage || ""} />
                </TopBarContainer>
            </TopBar>

            <FilterTagBar extended={props.extended || false}>
                <FilterTagBarContainer>
                    <SortButtons />
                    <TagContainer>
                        <Tag title="Lake" deletable={true} />
                        <Tag title="City" deletable={true} />
                        <Tag title="Shops" deletable={true} />
                        <Tag title="Lake" deletable={true} />
                        <Tag title="City" deletable={true} />
                        <Tag title="Shops" deletable={true} />
                    </TagContainer>
                </FilterTagBarContainer>
                
            </FilterTagBar>
        </HeaderContainer>
    )
}

export default Header;