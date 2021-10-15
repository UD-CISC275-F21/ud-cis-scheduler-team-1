import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FirstPage } from "./components/FirstPage";

function App(): JSX.Element {
    return (
        <div className="App">
            <FirstPage></FirstPage>
        </div>
    );
}

export default App;
