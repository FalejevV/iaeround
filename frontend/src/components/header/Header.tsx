import Logo from "../logo/Logo";
import SearchBar from "../searchbar/SearchBar";
import SortButtons from "../sortbuttons/SortButtons";
import { FilterTagBar, FilterTagBarContainer, HeaderContainer, TopBar, TopBarContainer } from "./Header.styled";
import LogoImage from "../../img/Logo.svg";
import LogoSmall from "../../img/LogoSmall.svg";

import UserMenu from "../usermenu/UserMenu";
import { TagContainer } from "../Styles.styled";
import Tag from "../tag/Tag";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import LoginRegister from "../loginregister/LoginRegister";
import { setUser } from "../../features/UserData";

function Header(props:{
    displayFilters?: boolean,
    profileImage:string,
    extended?:boolean,
}){

    const tagsSelector = useAppSelector((state:RootState) => state.searchFilter.tags);
    const userSelector = useAppSelector((state:RootState) => state.user);

    function displaySelectedTags(){
        if(tagsSelector.length > 0){
            let tagObjectArray = tagsSelector.map((tag:string) => <Tag key={nanoid()} deletable={true} title={tag} />);
            return(tagObjectArray);
        }
        return "";
    }
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        fetch('https://iaeround-backend.vercel.app/api/usertoken',{
            method: "GET",
            credentials: 'include',
        })
        .then(response => response.json())
        .then(data => {
            dispatch(setUser(data));
        });
    }, []);

    return(
        <HeaderContainer>
            <TopBar extended={props.extended || false}>
                <TopBarContainer>
                    <Logo srcSmall={LogoSmall} src={LogoImage} to="/" />
                    <SearchBar />
                    {userSelector.login !== "" ?  <UserMenu login={userSelector.login} profileImage={userSelector.avatar || ""} /> : <LoginRegister />}
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