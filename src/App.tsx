import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row} from "react-bootstrap";
import { Semester } from "./components/semester";
import { Requirements } from "./components/Requirements";
import { CoursePool } from "./components/CoursePool";
import { classTable } from "./interfaces/classTable";

const classes:Array<classTable> = [
    {name: "EGGG101 Introduction to Engineering", credits: 2},
    {name: "CISC108 Introduction to Computer Science I", credits: 3},
    {name: "MATH241 Analytic Geometry and Calculus A", credits: 3},
    {name: "ENGL110 Seminar in Composition", credits: 3},
    {name: "ARTH237 Art in Tibet", credits: 3},

];

function App(): JSX.Element {
    const [classes1, setClasses1] = useState<Array<classTable>>(classes);
    return (
        <Container className = "App">
            <h1 id = "title">UD CIS Scheduler</h1>
            
            <Row>
                <CoursePool></CoursePool>
                <Semester classes = {classes1} setClasses ={setClasses1} ></Semester>
                <Requirements></Requirements>
            </Row>
        </Container>
    );
}

export default App;
