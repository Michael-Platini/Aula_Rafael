import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume"
import Form from "./components/Form/styles";

const App = () => {
    return (
        <div>
        <div></div>
        <GlobalStyle />
        <Header />
        <Resume />
        <Form/>
        </div>
    );
;}

export default App