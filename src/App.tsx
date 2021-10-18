import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row} from "react-bootstrap";
import {FourYearPlan} from "./components/FourYearPlan";
import {Requirements} from "./components/Requirements";
import {CoursePool} from "./components/CoursePool";
import {Course} from "./interfaces/course";
import { Semester } from "./interfaces/semester";

const testClasses: Course[] = [
    {name: "EGGG101 Introduction to Engineering", credits: 2},
    {name: "CISC108 Introduction to Computer Science I", credits: 3},
    {name: "MATH241 Analytic Geometry and Calculus A", credits: 3},
    {name: "ENGL110 Seminar in Composition", credits: 3},
    {name: "ARTH237 Art in Tibet", credits: 3},
];

const defaultSemesters: Semester[] = [
    {title: "Fall 2021", courses: []},
    {title: "Spring 2022", courses: []}
];

function App(): JSX.Element {
    // All courses in our database
    const [courses, setCourses] = useState<Course[]>(testClasses);
    const [semesters, setSemesters] = useState<Semester[]>(defaultSemesters as Semester[]);

    return (
        <Container className="App">
            <h1 id="title">UD CIS Scheduler</h1>

            <Row>
                <CoursePool></CoursePool>
                <FourYearPlan semesters={semesters} setSemesters={setSemesters}></FourYearPlan>
                <Requirements></Requirements>
            </Row>
        </Container>
    );
}

export default App;
