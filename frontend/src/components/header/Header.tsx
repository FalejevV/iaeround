import Logo from "../logo/Logo";
import SearchBar from "../searchbar/SearchBar";
import SortButtons from "../sortbuttons/SortButtons";
import { FilterTagBar, FilterTagBarContainer, HeaderContainer, TopBar, TopBarContainer } from "./Header.styled";
import LogoImage from "../../img/Logo.svg";
import LogoSmall from "../../img/LogoSmall.svg";

import UserMenu from "../usermenu/UserMenu";
import { TagContainer } from "../Styles.styled";
import Tag from "../tag/Tag";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import LoginRegister from "../loginregister/LoginRegister";

function Header(props:{
    displayFilters?: boolean,
    profileImage:string,
    extended?:boolean,
}){

    const tagsSelector = useAppSelector((state:RootState) => state.searchFilter.tags);
    const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
    function displaySelectedTags(){
        if(tagsSelector.length > 0){
            let tagObjectArray = tagsSelector.map((tag:string) => <Tag key={nanoid()} deletable={true} title={tag} />);
            return(tagObjectArray);
        }
        return "";
    }

    return(
        <HeaderContainer>
            <TopBar extended={props.extended || false}>
                <TopBarContainer>
                    <Logo srcSmall={LogoSmall} src={LogoImage} to="/" />
                    <SearchBar />
                    {loggedIn ?  <UserMenu profileImage={props.profileImage || ""} /> : <LoginRegister />}
                </TopBarContainer>
            </TopBar>

            <FilterTagBar extended={props.extended || false}>
                <FilterTagBarContainer>
                    <SortButtons />
                    { displaySelectedTags() !== "" &&
                        <TagContainer>
                            {displaySelectedTags()}
                        </TagContainer>
                    }
                </FilterTagBarContainer>
                
            </FilterTagBar>
        </HeaderContainer>
    )
}

export default Header;