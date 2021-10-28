import React, {useState} from "react";
import {Button, Col, Modal, Row, Table} from "react-bootstrap";
import {EditText, EditTextarea} from "react-edit-text";
import {Course} from "../interfaces/course";
import {Semester} from "../interfaces/semester";

/* Getting a table to render based on a list is from https://stackoverflow.com/questions/54659039/remove-table-row-using-hooks */
/* Removing from a list is from https://www.robinwieruch.de/react-remove-item-from-list */

interface semesterTable {
    semester: Semester;
    setSemester: (s: Semester[]) => void;
    semesters: Semester[];
}

export function SemesterTable({semester, setSemester, semesters}: semesterTable): JSX.Element {
    const [courses, setCourses] = useState<Course[]>(semester.courses);
    const [show, setShow] = useState<boolean>(false); //To show Modal when Course is clicked
    const [mod, setMod] = useState<Course>(courses[0]); // staging the changed info before save

    // Removes a course from a semester based on its name
    function removeCourse(name: string): void {
        setCourses([...courses.filter(course => course.name !== name)]);
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
        const newMod: Course = mod;
        switch (name) {
        case "descr": {
            newMod.descr = value;
            break;
        }
        case "credits": {
            newMod.credits = value;
            break;
        }
        case "preRed": {
            newMod.preReq = value;
            break;
        }
        case "restrict": {
            newMod.restrict = value;
            break;
        }
        case "breadth": {
            newMod.breadth = value;
            break;
        }
        case "typ": {
            newMod.typ = value;
            break;
        }
        }
        setMod(newMod);
        console.log(semester.courses[0].descr);
    };

    //handle reset courses info after modifying in modal
    function handleSaveChanges(): void {
        const newCourses: Course[] = [...courses];
        newCourses[courses.findIndex(c => c.name == mod.name)] = mod;
        setCourses(newCourses);
    }
    return (
        <Col>
            <Table striped bordered hover className="semester">
                <thead>
                    <tr>
                        <th colSpan={3}>{semester.title}</th>
                        <th>
                            <Button color="red" onClick={() => removeSemester(semester.title)}>
                                {" "}
                                X{" "}
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
                    {courses.map(course => (
                        <tr key={course.name}>
                            <td>
                                <a
                                    onClick={() => {
                                        setShow(true);
                                        setMod(JSON.parse(JSON.stringify(course)));
                                    }}>
                                    {course.code} {course.name}
                                </a>
                            </td>
                            <td>{course.credits}</td>
                            <td>A</td>
                            <td>
                                <Button color="red" onClick={() => removeCourse(course.name)}>
                                    {" "}
                                    X{" "}
                                </Button>
                            </td>
                        </tr>
                    ))}
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
                    <Modal.Title>Modal title</Modal.Title>
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
                                defaultValue={mod?.descr}
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
                                defaultValue={mod?.credits}
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
                                defaultValue={mod?.preReq}
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
                                defaultValue={mod?.restrict}
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
                                defaultValue={mod?.breadth}
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
                                defaultValue={mod?.typ}
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
