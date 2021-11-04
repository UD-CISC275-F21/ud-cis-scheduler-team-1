import React, {useState} from "react";
import {Button, Row, Modal, Dropdown} from "react-bootstrap";
import "react-edit-text/dist/index.css";
import {season, Semester} from "../interfaces/semester";
import "../App.css";

interface addSemModal {
    show: boolean;
    setShow: (s: boolean) => void;
    semesters: Semester[];
    setSemesters: (setC: Semester[]) => void;
}
export function AddSemesterModal({
    show,
    setShow,
    semesters,
    setSemesters,
}: addSemModal): JSX.Element {
    const [inputSeason, setInputSeason] = useState<season>(season.fall);
    const [inputYear, setInputYear] = useState<number>(2021);
    const years = Array.from(Array(30).keys()).map(x => x + 2012);

    return (
        <Modal
            size="sm"
            show={show}
            onHide={() => {
                setShow(false);
            }}>
            <Modal.Header closeButton>
                <Modal.Title>Adding New Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Dropdown>
                        <strong>Season : </strong>
                        <Dropdown.Toggle size="sm" variant="outline-dark" id="dropdown-basic">
                            {inputSeason}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                onClick={() => {
                                    setInputSeason(season.fall);
                                }}>
                                Fall
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => {
                                    setInputSeason(season.winter);
                                }}>
                                Winter
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => {
                                    setInputSeason(season.spring);
                                }}>
                                Spring
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => {
                                    setInputSeason(season.summer);
                                }}>
                                Summer
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <strong>Year : </strong>
                        <Dropdown.Toggle size="sm" variant="outline-dark" id="dropdown-basic">
                            {inputYear}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {years.map(year => (
                                <Dropdown.Item key={year}
                                    onClick={() => {
                                        setInputYear(year);
                                    }}>
                                    {year}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => {
                        setShow(false);
                    }}>
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        const newSem : Semester[] = semesters;
                        newSem.push({season : inputSeason, year : inputYear, courses : []});
                        setSemesters(semesters);
                        setShow(false);
                    }}>
                    Add Semester
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
