import React, { FormEvent } from "react";
import TextField from "../components/inputfield/TextField";
import { Form, SILogin, SIContainer, ButtonsContainer, SIRegister, ArrowSVGLeft, ArrowSVGRight, RegisterInputsContainer } from "./SignIn.styled";


function SignIn(props:{
    headerExtend: any,
}){

    const [formType, setFormType] = React.useState<string>("Sign In");

    React.useEffect(() => {
        props.headerExtend(false);
        console.log("HEADER EXTEND");
    })

    function toggleForm(name:string){
        if(formType !== name){
            setFormType(name);
        }
    }

    function formSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    return(
        <SIContainer>
            <Form onSubmit={(e) => formSubmit(e)}>
                <TextField title="Login" />
                <TextField title="Password" type="password" />
                <RegisterInputsContainer toggle={formType === "Sign Up"}>
                    <TextField title ="Repeat_password" type="password" />
                    <TextField title ="Email" />
                </RegisterInputsContainer>
                <ButtonsContainer>
                    <SILogin onClick={() => toggleForm("Sign In")} toggle={formType === "Sign In"}>
                        <ArrowSVGLeft viewBox="0 0 24 24" width="24" height="24">
                            <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/>
                        </ArrowSVGLeft>
                        Sign In
                    </SILogin>
                    <SIRegister onClick={() => toggleForm("Sign Up")} toggle={formType === "Sign Up"}>
                        <ArrowSVGRight viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/>
                        </ArrowSVGRight>
                        Sign Up
                    </SIRegister>
                </ButtonsContainer>
            </Form>
        </SIContainer>
    )
}

export default SignIn;