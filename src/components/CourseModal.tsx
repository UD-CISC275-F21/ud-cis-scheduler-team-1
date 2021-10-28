import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import Modal from "react-bootstrap/esm/Modal";
import {EditText, EditTextarea} from "react-edit-text";
import {CourseDisplay} from "../interfaces/course";
import "react-edit-text/dist/index.css";


interface courseModal {
    show: boolean;
    setShow: (s: boolean) => void;
    courses: CourseDisplay[];
    setCourses: (setC: CourseDisplay[]) => void;
    mod: CourseDisplay;
    setMod: (setMod: CourseDisplay) => void;
}

export function CourseModal({
    show,
    setShow,
    courses,
    setCourses,
    mod,
    setMod,
}: courseModal): JSX.Element {

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
        case "name": {
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
    );
}
