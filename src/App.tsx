import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Container, Row} from "react-bootstrap";
import {FourYearPlan} from "./components/FourYearPlan";
import {Requirements} from "./components/Requirements";
import {CoursePool} from "./components/CoursePool";
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App(): JSX.Element {
    return (
        <DndProvider backend={HTML5Backend}>
            <Container fluid className="App">
                <h1 id="title">UD CIS Scheduler</h1>
                <Row>
                    <Col><CoursePool></CoursePool></Col>
                    <Col md={8}><FourYearPlan></FourYearPlan></Col>
                    <Col><Requirements></Requirements></Col>
                </Row>
            </Container>
        </DndProvider>
    );
} 
export default App;
