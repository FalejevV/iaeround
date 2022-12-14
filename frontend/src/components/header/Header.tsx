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
import { dropUser, setUser } from "../../features/UserData";
import { fetchAddress } from "../../DeveloperData";

function Header(props:{
    displayFilters?: boolean,
    profileImage:string,
    extended?:boolean,
}){

    const tagsSelector = useAppSelector((state:RootState) => state.searchFilter.tags);
    const userSelector = useAppSelector((state:RootState) => state.user);
    const [pageOffset, setPageOffset] = React.useState(window.pageYOffset);
    const [headerHidden, setHeaderHidden] = React.useState(false);

    function displaySelectedTags(){
        if(tagsSelector.length > 0){
            let tagObjectArray = tagsSelector.map((tag:string) => <Tag key={nanoid()} deletable={true} title={tag} />);
            return(tagObjectArray);
        }
        return "";
    }
    const dispatch = useAppDispatch();

    React.useEffect(() => {
            fetch(fetchAddress + '/api/usertoken',{
            method: "GET",
            credentials: 'include',
        })
        .then(response => response.json())
        .then(data => {
            if(data !== undefined){
                if(data !== undefined){
                    if(!data.status){
                        dispatch(setUser(data));
                    }else{
                        dispatch(dropUser(""));
                    }
                }
            }

        });
    }, [dispatch]);

    React.useEffect(() => {
        if(props.extended){
            document.addEventListener('scroll', (e) => {
                if(pageOffset < window.pageYOffset && window.pageYOffset > 100 && props.extended && pageOffset > 50){
                    if(!headerHidden && pageOffset + 200 < window.pageYOffset){
                        setHeaderHidden(true);
                        setPageOffset(window.pageYOffset);
                    }
                    return;
                }
    
                if(pageOffset > window.pageYOffset && props.extended){
                    if(headerHidden && (pageOffset - 200) > window.pageYOffset){
                        setHeaderHidden(false);
                        setPageOffset(window.pageYOffset);
                    }
                    return;
                }else{
                    setPageOffset(window.pageYOffset);
                }
            });
    
            return(() =>{
                document.removeEventListener('scroll', (e) => {
                    setPageOffset(window.pageYOffset);
                });
            })
        }else{
            setHeaderHidden(false);
        }
    }, [headerHidden,pageOffset,props.extended]);
    
    return(
        <HeaderContainer toggle={headerHidden}>
            <TopBar extended={props.extended || false}>
                <TopBarContainer>
                    <Logo srcSmall={LogoSmall} src={LogoImage} to="/" />
                    <SearchBar />
                    {userSelector.login !== "" ?  <UserMenu id={userSelector.id} name={userSelector.name} profileAvatar={userSelector.avatar} /> : <LoginRegister />}
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