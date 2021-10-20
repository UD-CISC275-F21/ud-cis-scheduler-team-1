import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Container, Row} from "react-bootstrap";
import {FourYearPlan} from "./components/FourYearPlan";
import {Requirements} from "./components/Requirements";
import {CoursePool} from "./components/CoursePool";
import {Course} from "./interfaces/course";
import { Semester } from "./interfaces/semester";

const testCourses: Course[] = [
    {name: "EGGG101 Introduction to Engineering", credits: 2, grade: "F"},
    {name: "CISC108 Introduction to Computer Science I", credits: 3, grade: "F"},
    {name: "MATH241 Analytic Geometry and Calculus A", credits: 3, grade: "F"},
    {name: "ENGL110 Seminar in Composition", credits: 3, grade: "F"},
    {name: "ARTH237 Art in Tibet", credits: 3, grade: "F"},
];

const defaultSemesters: Semester[] = [
    {title: "Fall 2021", courses: testCourses},
    {title: "Spring 2022", courses: []}
];



function App(): JSX.Element {
    // All courses in our database
    // const [courses, setCourses] = useState<Course[]>(testCourses);

    const [semesters, setSemesters] = useState<Semester[]>(defaultSemesters);

    return (
        <Container className="App">
            <h1 id="title">UD CIS Scheduler</h1>

            <Row>
                <Col><CoursePool></CoursePool></Col>
                <Col xs={6}><FourYearPlan semesters={semesters} setSemesters={setSemesters} ></FourYearPlan></Col>
                <Col><Requirements></Requirements></Col>
            </Row>
        </Container>
    );
}

export default App;
