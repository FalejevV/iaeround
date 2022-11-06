import React, { FormEvent } from "react";
import TextField from "../components/inputfield/TextField";
import { Form, SILogin, SIContainer, ButtonsContainer, SIRegister, ArrowSVGLeft, ArrowSVGRight, RegisterInputsContainer, AlertField, AlertContainer } from "./SignIn.styled";


function SignIn(props:{
    headerExtend: any,
}){

    const [formType, setFormType] = React.useState<string>("Sign In");
    const [submitted, setSubmitted] = React.useState<boolean>(false);
    const [formData, setFormData] = React.useState<{login:string,password:string,repeat_password:string, email:string}>();
    const [alertText ,setAlertText] = React.useState<string[]>([]);

    React.useEffect(() => {
        props.headerExtend(false);
    })


    
    function checkFields(fieldValueArray:string[]){
        let alertArray = [];
        let dataFilled = true;
        fieldValueArray.forEach((item:string) => {
            if(item.trim() === ""){
                dataFilled = false;
            }
        })
        if(!dataFilled){
            alertArray.push("Some fields look empty");
        }
        if(fieldValueArray.length > 2){
            if(fieldValueArray[1] !== fieldValueArray[2]){
                alertArray.push("Password fields do not match");
            }
        }

        setAlertText(alertArray);
        return dataFilled;
    }    

    React.useEffect(() => {
        if(formData && submitted === true){
            if(formType === "Sign In"){
                if(checkFields([formData.login, formData.password])){
                    
                    const requestOptions = {
                        method: 'POST',
                        headers: { 
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ 
                            login: formData.login,
                            password: formData.password,
                         })
                    };


                    fetch('https://iaeround-backend.vercel.app/api/auth/login', requestOptions)
                    .then(response => response.json())
                    .then(data => console.log(data.rows));
                }
            }else if (formType === "Sign Up"){
                if(checkFields([formData.login, formData.password,formData.repeat_password,formData.email])){
                    const requestOptions = {
                        method: 'POST',
                        headers: { 
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ 
                            login: formData.login,
                            email:formData.email,
                            password: formData.password,
                         })
                    };


                    fetch('https://iaeround-backend.vercel.app/api/auth/register', requestOptions)
                    .then(response => response.json())
                    .then(data => console.log(data.rows));
                }
            }
        }
        setSubmitted(false);
    },[submitted, formData, formType]);

    function toggleForm(name:string){
        if(formType !== name){
            setFormType(name);
            setAlertText([]);
        }else{
            setSubmitted(true);
        }
        
    }

    function formSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        const target:any = e.target;
        const login = target.login.value;
        const password = target.password.value;
        const email = target.email.value;
        const repeat_password = target.repeat_password.value;

        const data = {
            login,
            password,
            email,
            repeat_password
        }

        setFormData(data);
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

                {alertText.length > 0 && 
                    <AlertContainer>
                        {alertText.map(message => <AlertField key={message}>{`\xa0 • \xa0 ${message}`}</AlertField>)}
                    </AlertContainer>
                }
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