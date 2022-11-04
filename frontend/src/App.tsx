import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "./app/store";
import GlobalStyleStyled from "./components/GlobalStyle.styled";
import Header from "./components/header/Header";
import CreateRoute from "./pages/CreateRoute";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
const theme={
    accentColor: '#3E6144',
}


function App(){
    
    const [headerExtend, setHeaderExtend] = React.useState(true);
    
    return(
        <ThemeProvider theme={{
            ...theme,
            headerExtend: headerExtend,
        }}>
            <Provider store={store}>
            <BrowserRouter>
                <GlobalStyleStyled/>
                <Header profileImage="" extended={headerExtend}/>
                <Routes>
                <Route path="/" element={<HomePage headerExtend={setHeaderExtend}/>} />
                <Route path="/create" element={<CreateRoute headerExtend={setHeaderExtend}/>} />
                <Route path="/sign-in" element={<SignIn headerExtend={setHeaderExtend} />} />
                </Routes>
            </BrowserRouter>
            </Provider>
        </ThemeProvider>
    )
}

export default App;