import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row} from "react-bootstrap";
import { Semester } from "./components/semester";
import { Requirements } from "./components/Requirements";
import { CoursePool } from "./components/CoursePool";

function App(): JSX.Element {
    return (
        <Container className = "App">
            <h1 id = "title">UD CIS Scheduler</h1>
            
            <Row>
                <CoursePool></CoursePool>
                <Semester></Semester>
                <Requirements></Requirements>
            </Row>
        </Container>
    );
}

export default App;
