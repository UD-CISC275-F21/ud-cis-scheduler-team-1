import React from "react";
import "./App.css";
import { Semester } from "./components/semester";

function App(): JSX.Element {
    return (
        <div className="App">
             UD CIS Scheduler!
            <Semester></Semester>
        </div>
    );
}

export default App;
