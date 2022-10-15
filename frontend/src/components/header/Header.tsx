import { Container } from "../Global.styled";
import Logo from "../logo/Logo";
import { HeaderContainer } from "./Header.styled";


function Header(){
    return(
        <HeaderContainer>
            <Container>
                <Logo to="/" src=""/>
            </Container>
        </HeaderContainer>
    )
}

export default Header;