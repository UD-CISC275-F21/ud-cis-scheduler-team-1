import React, { useState } from "react";
import { Button, Row, Modal, Dropdown, Col } from "react-bootstrap";
import "react-edit-text/dist/index.css";
import { season, Semester } from "../interfaces/semester";
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
    const [alert, setAlert] = useState<string>("");
    const years = Array.from(Array(30).keys()).map(x => x + 2012);


    //handle save new semester if its not in the plan yet 
    function handleSaveSem(): void {
        const newSem: Semester[] = semesters;
        if (semesters.filter(s => s.season === inputSeason && s.year === inputYear).length > 0) {
            setAlert("Semester already in your plan!");
        } else {
            newSem.push({ season: inputSeason, year: inputYear, courses: [] });
            newSem.sort(compareSemesters);
            setSemesters(newSem);
            setAlert("");
            setShow(false);
        }
    }
    //compare semesters
    function compareSemesters(semester1: Semester, semester2: Semester): number {
        if (semester1.year < semester2.year) {
            return -1;
        } else if (semester1.year > semester2.year) {
            return 1;
        } else {
            const seasonsOrder = Object.values(season);
            if (seasonsOrder.indexOf(semester1.season) < seasonsOrder.indexOf(semester2.season)) {
                return -1;
            } else if (seasonsOrder.indexOf(semester1.season) > seasonsOrder.indexOf(semester2.season)) {
                return 1;
            }
        }
        return 0;
    }
    return (
        <Modal
            show={show}
            onHide={() => {
                setShow(false);
            }}>
            <Modal.Header closeButton>
                <Modal.Title><strong>Adding New Semester</strong></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row id="add-sems-dropdown">
                    <Col id="add-sems-col">
                        <Dropdown>
                            <strong>Season : </strong>
                            <Dropdown.Toggle size="sm" variant="outline-dark" id="dropdown-basic">
                                {inputSeason}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    onClick={() => {
                                        setInputSeason(season.fall);
                                        setAlert("");
                                    }}>
                                    Fall
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => {
                                        setInputSeason(season.winter);
                                        setAlert("");
                                    }}>
                                    Winter
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => {
                                        setInputSeason(season.spring);
                                        setAlert("");
                                    }}>
                                    Spring
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => {
                                        setInputSeason(season.summer);
                                        setAlert("");
                                    }}>
                                    Summer
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col>
                        <Dropdown>
                            <strong>Year : </strong>
                            <Dropdown.Toggle size="sm" variant="outline-dark" id="dropdown-basic">
                                {inputYear}
                            </Dropdown.Toggle>
                            <Dropdown.Menu id="scrolling">
                                {years.map(year =>
                                    <Dropdown.Item key={year}
                                        onClick={() => {
                                            setInputYear(year);
                                        }}>
                                        {year}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <p id="alert">{alert}</p>
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
                        handleSaveSem();
                    }}>
                    Add Semester
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
