import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FourYearPlan } from "./components/FourYearPlan";
import { Requirements } from "./components/Requirements";
import { CoursePool } from "./components/CoursePool";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { season, Semester } from "./interfaces/semester";
import { Concentration } from "./components/Concentrations";
import { CourseDisplay } from "./interfaces/course";
import { Welcome } from "./components/Welcome";

const defaultSemesters: Semester[] = [
    { season: season.fall, year: 2021, courses: [] },
    { season: season.spring, year: 2022, courses: [] },
];
function App(): JSX.Element {
    const [semesters, setSemesters] = useState<Semester[]>(defaultSemesters);
    const [bsba, setBSBA] = useState<string>("BS");
    const [major, setMajor] = useState<string>("Major");
    const [conc, setConc] = useState<string>("Traditional Program");
    const [coursesPool, setCoursesPool] = useState<CourseDisplay[]>([]); //for course pool
    const [show, setShow] = useState<boolean>(true);
    return (
        <div>
            <Welcome show={show} setShow={setShow}></Welcome>
            <DndProvider backend={HTML5Backend}>
                <Container fluid className="App">
                    <div className="help-button"><Button variant="outline-dark" onClick={()=>setShow(true)}>Help</Button></div>
                    <h1 id="title">UD CIS Scheduler</h1>
                    <p>Click on the course name in a semester to view additional information and to edit.</p>
                    <Row>
                        <Col><CoursePool coursesPool={coursesPool} setCoursesPool={setCoursesPool}></CoursePool></Col>
                        <Col md={8}>
                            <Row><Concentration bsba={bsba} setBSBA={setBSBA} major={major} setMajor={setMajor} conc={conc} setConc={setConc} ></Concentration></Row>
                            <Row><FourYearPlan semesters={semesters} setSemesters={setSemesters} coursesPool={coursesPool} setCoursesPool={setCoursesPool}></FourYearPlan></Row>
                        </Col>
                        <Col><Requirements semesters={semesters} bsba={bsba} major={major} conc={conc} ></Requirements></Col>
                    </Row>
                </Container>
            </DndProvider>
        </div>
    );
}
export default App;
