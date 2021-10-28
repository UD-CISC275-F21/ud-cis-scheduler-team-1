import React, {useState} from "react";
import {Button, Col, Table, Row, Modal} from "react-bootstrap";
import {CourseDisplay} from "../interfaces/course";
import {Semester} from "../interfaces/semester";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
import "../App.css";

/* Getting a table to render based on a list is from https://stackoverflow.com/questions/54659039/remove-table-row-using-hooks */
/* Removing from a list is from https://www.robinwieruch.de/react-remove-item-from-list */

interface semesterTable {
    semester: Semester;
    setSemester: (s: Semester[]) => void;
    semesters: Semester[];
}

export function SemesterTable({semester, setSemester, semesters}: semesterTable): JSX.Element {
    const [courses, setCourses] = useState<CourseDisplay[]>(semester.courses);
    const [show, setShow] = useState<boolean>(false); //To show Modal when Course is clicked
    const [mod, setMod] = useState<CourseDisplay>(courses[0]); // staging the changed info before save

    // Removes a course from a semester based on its name
    function removeCourse(name: string): void {
        setCourses([...courses.filter(course => course.info.name !== name)]);
        semester.courses = courses;
    }

    function removeSemester(name: string): void {
        setSemester([...semesters.filter(semester => semester.title !== name)]);
        semester.courses = courses;
    }

    //handle staging chnaged info 
    const handleSave = ({
        name,
        value,
        previousValue,
    }: {
        name: string;
        value: string;
        previousValue: string;
    }) => { 
        const newMod: CourseDisplay = mod;
        switch (name) {
        case "name" : {
            newMod.info.name = value;
            break;
        }
        case "descr": {
            newMod.info.descr = value;
            break;
        }
        case "credits": {
            newMod.info.credits = value;
            break;
        }
        case "preReq": {
            newMod.info.preReq = value;
            break;
        }
        case "restrict": {
            newMod.info.restrict = value;
            break;
        }
        case "breadth": {
            newMod.info.breadth = value;
            break;
        }
        case "typ": {
            newMod.info.typ = value;
            break;
        }
        }
        setMod(newMod);
        console.log("Previous info: " + previousValue);
        console.log("New info: " + value);
    };

    //handle reset courses info after modifying in modal
    function handleSaveChanges(): void {
        const newCourses: CourseDisplay[] = [...courses];
        newCourses[courses.findIndex(c => c.info.code == mod.info.code)] = mod;
        setCourses(newCourses);
    }

    return (
        <Col>
            <Table striped bordered hover className="semester">
                <thead>
                    <tr>
                        <th colSpan={3}>{semester.title}</th>
                        <th>
                            <Button variant="outline-dark" onClick={() => removeSemester(semester.title)}>
                                X
                            </Button>
                        </th>
                    </tr>
                    <tr>
                        <th>Course</th>
                        <th>Credits</th>
                        <th>Grade</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => 
                        <tr key={course.info.name}>
                            <td>
                                <a
                                    onClick={() => {
                                        setShow(true);
                                        setMod(JSON.parse(JSON.stringify(course)));
                                    }}>
                                    {course.info.code}
                                    <br></br>
                                    {course.info.name}
                                </a>
                            </td>
                            <td>{course.info.credits}</td>
                            <td>{course.grade}</td>
                            <td>
                                <Button variant="outline-dark" onClick={() => removeCourse(course.info.name)}>
                                    {" "}
                                    X{" "}
                                </Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Button
                variant="secondary"
                onClick={() => {
                    setCourses([]);
                }}>
                Delete All Courses
            </Button>
            <Modal
                show={show}
                size="lg"
                onHide={() => {
                    setShow(false);
                }}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {mod?.info.code}
                        <EditText 
                            name="name"
                            defaultValue={mod?.info.name}
                            onSave={handleSave}></EditText>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md="2">
                            <strong>Description:</strong>
                        </Col>
                        <Col>
                            <EditTextarea
                                rows={4}
                                name="descr"
                                defaultValue={mod?.info.descr}
                                onSave={handleSave}></EditTextarea>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="2">
                            <strong>Credits:</strong>
                        </Col>
                        <Col>
                            <EditText
                                name="credits"
                                defaultValue={mod?.info.credits}
                                onSave={handleSave}></EditText>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="2">
                            <strong>Pre-Reqs:</strong>
                        </Col>
                        <Col>
                            <EditText
                                name="preReq"
                                defaultValue={mod?.info.preReq}
                                onSave={handleSave}></EditText>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="2">
                            <strong>Restriction:</strong>
                        </Col>
                        <Col>
                            <EditText
                                name="restrict"
                                defaultValue={mod?.info.restrict}
                                onSave={handleSave}></EditText>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="2">
                            <strong>Breadth:</strong>
                        </Col>
                        <Col>
                            <EditText
                                name="breadth"
                                defaultValue={mod?.info.breadth}
                                onSave={handleSave}></EditText>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="2">
                            <strong>Avalability:</strong>
                        </Col>
                        <Col>
                            <EditText
                                name="typ"
                                defaultValue={mod?.info.typ}
                                onSave={handleSave}></EditText>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setShow(false);
                        }}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleSaveChanges();
                            setShow(false);
                        }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Col>
    );
}
