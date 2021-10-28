import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Container, Row} from "react-bootstrap";
import {FourYearPlan} from "./components/FourYearPlan";
import {Requirements} from "./components/Requirements";
import {CoursePool} from "./components/CoursePool";
import {Course} from "./interfaces/course";
import { Semester } from "./interfaces/semester";
import { findCourse } from "./utilities/findCourse";

const testCourses: Course[] = [
    findCourse("EGGG 101"),
    findCourse("CISC 108"),
    findCourse("MATH 241"),
    findCourse("ENGL 110"),
    findCourse("ARTH 237"),
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
