import { LRContainer, LRLink, SVGKeyIcon } from "./LoginRegister.styled";


function LoginRegister(){
    return(
        <LRContainer to="/sign-in">
            <LRLink>Sign In</LRLink>
            <SVGKeyIcon viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/><path d="M17 14h-4.341a6 6 0 1 1 0-4H23v4h-2v4h-4v-4zM7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
            </SVGKeyIcon>
        </LRContainer>
    )
}

export default LoginRegister;