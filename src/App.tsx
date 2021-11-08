import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { FourYearPlan } from "./components/FourYearPlan";
import { Requirements } from "./components/Requirements";
import { CoursePool } from "./components/CoursePool";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { season, Semester } from "./interfaces/semester";
import { Concentration } from "./components/Concentrations";

const defaultSemesters: Semester[] = [
    { season: season.fall, year: 2021, courses: [] },
    { season: season.spring, year: 2022, courses: [] },
];
function App(): JSX.Element {
    const [semesters, setSemesters] = useState<Semester[]>(defaultSemesters);
    const [bsba, setBSBA] = useState<string>("BS");
    const [major, setMajor] = useState<string>("Major");
    const [conc, setConc] = useState<string>("Traditional Program");
    return (
        <DndProvider backend={HTML5Backend}>
            <Container fluid className="App">
                <h1 id="title">UD CIS Scheduler</h1>
                <Row>
                    <Col><CoursePool></CoursePool></Col>
                    <Col md={8}>
                        <Row><Concentration bsba={bsba} setBSBA={setBSBA} major={major} setMajor={setMajor} conc={conc} setConc={setConc} ></Concentration></Row>
                        <Row>
                            <FourYearPlan semesters={semesters} setSemesters={setSemesters}></FourYearPlan></Row>
                    </Col>
                    <Col><Requirements semesters={semesters} bsba={bsba} major={major} conc={conc} ></Requirements></Col>
                </Row>
            </Container>
        </DndProvider>
    );
}
export default App;
