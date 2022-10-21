import { Button, LinkText } from "../Styles.styled";
import { DropdownContainer, DropdownDisabler, DropdownSVG, MenuContainer, PlusSVG, ProfileImage, UserNameContainer, UserNameText } from "./UserMenu.styled";
import ProfileImageSVG from "../../img/ProfileImage.svg";
import React from "react";

function UserMenu(props:{
    profileImage?: string,

})
{
    const [dropdownOpened, setDropdownOpened] = React.useState(false);

    return(
        <MenuContainer>
            <Button>
                <PlusSVG  width="14" height="14" viewBox="0 0 14 14">
                    <path d="M12.6734 5.91427H7.60407V0.844896C7.60407 0.620816 7.51505 0.405913 7.3566 0.247465C7.19815 0.0890158 6.98325 0 6.75917 0C6.53509 0 6.32019 0.0890158 6.16174 0.247465C6.00329 0.405913 5.91427 0.620816 5.91427 0.844896V5.91427H0.844896C0.620816 5.91427 0.405913 6.00329 0.247465 6.16174C0.0890158 6.32019 0 6.53509 0 6.75917C0 6.98325 0.0890158 7.19815 0.247465 7.3566C0.405913 7.51505 0.620816 7.60407 0.844896 7.60407H5.91427V12.6734C5.91427 12.8975 6.00329 13.1124 6.16174 13.2709C6.32019 13.4293 6.53509 13.5183 6.75917 13.5183C6.98325 13.5183 7.19815 13.4293 7.3566 13.2709C7.51505 13.1124 7.60407 12.8975 7.60407 12.6734V7.60407H12.6734C12.8975 7.60407 13.1124 7.51505 13.2709 7.3566C13.4293 7.19815 13.5183 6.98325 13.5183 6.75917C13.5183 6.53509 13.4293 6.32019 13.2709 6.16174C13.1124 6.00329 12.8975 5.91427 12.6734 5.91427Z"/>
                </PlusSVG>
                New route
            </Button>
            <UserNameContainer onClick={() => setDropdownOpened(prevDropdownOpened => !prevDropdownOpened)}>
                <UserNameText>
                    Vladimir
                </UserNameText>
                <DropdownSVG width="19" height="19" viewBox="0 0 19 19">
                    <path d="M9.50006 12.6667C9.31508 12.667 9.13582 12.6026 8.99339 12.4846L4.24339 8.52627C4.08172 8.39189 3.98005 8.19879 3.96075 7.98945C3.94145 7.78012 4.0061 7.57169 4.14047 7.41001C4.27485 7.24834 4.46795 7.14667 4.67728 7.12737C4.88662 7.10807 5.09505 7.17272 5.25672 7.3071L9.50006 10.8538L13.7434 7.43377C13.8244 7.368 13.9175 7.3189 14.0176 7.28926C14.1176 7.25963 14.2225 7.25005 14.3262 7.26109C14.4299 7.27213 14.5305 7.30355 14.622 7.35356C14.7135 7.40358 14.7943 7.47119 14.8596 7.55251C14.9321 7.63392 14.987 7.72941 15.0209 7.83302C15.0548 7.93663 15.0669 8.04612 15.0565 8.15462C15.0461 8.26313 15.0134 8.36832 14.9605 8.46361C14.9075 8.55889 14.8355 8.64221 14.7488 8.70835L9.99881 12.5321C9.85228 12.6315 9.67668 12.6789 9.50006 12.6667Z" />
                </DropdownSVG>
                <DropdownContainer toggle={dropdownOpened}>
                    <LinkText to="/profile"> # Vladimir</LinkText>
                    <LinkText to="/profile">Profile</LinkText>
                    <LinkText to="/settings">Settings</LinkText>
                    <LinkText to="/signout">Sign Out</LinkText>
                </DropdownContainer>
            </UserNameContainer>
            <DropdownDisabler toggle={dropdownOpened} onClick={() => setDropdownOpened(prevDropdownOpened => !prevDropdownOpened)} ></DropdownDisabler>
            <ProfileImage src={props.profileImage !== "" ? props.profileImage : ProfileImageSVG } onClick={() => setDropdownOpened(prevDropdownOpened => !prevDropdownOpened)} />
        </MenuContainer>
    )
}

export default UserMenu;