import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FirstPage } from "./components/FirstPage";
import { SecondPage } from "./components/SecondPage";

function App(): JSX.Element {
    const [page,setPage] = useState<string>("first-page");
    return (
        <div className="App">
            {page==="first-page" && <FirstPage setPage={setPage}></FirstPage>}
            {page==="second-page" && <SecondPage></SecondPage>}
        </div>
    );
}

export default App;
