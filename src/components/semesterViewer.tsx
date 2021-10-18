import React, { useState } from "react";
import { Button, Col, Row, Table, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Semester } from "../interfaces/semester";

/* Getting a table to render based on a list is from https://stackoverflow.com/questions/54659039/remove-table-row-using-hooks */
/* Removing from a list is from https://www.robinwieruch.de/react-remove-item-from-list */

export function SemesterViewer({ semesters, setSemesters }:
    { semesters: Semester[], setSemesters: (s: Semester[]) => void }): JSX.Element {

    // Removes a semester based on its name (ex. "Fall 2021")
    function removeSemester(title: string): void {
        setSemesters(semesters.filter(semester => semester.title != title));
    }

    // Removes the most recently added semester in the list
    function removeLastSemester(): void {
        setSemesters([...semesters.splice(-1)]);
    }

    // Adds a new semester with the given title (ex. "Fall 2021") and no courses
    function addSemester(title: string): void {
        setSemesters([...semesters,
            {
                title: title,
                courses: []
            }
        ]);
    }

    const [numTable, setNumTable] = useState<Array<iNumTable>>(initialTable);
    return (
        <Col md={8}>
            <h2 className="subtitle">Four Year Plan</h2>
            {numTable.map((item, index) =>
                <Row key={index}>
                    <Col>
                        <Table striped bordered hover className="semester">
                            <thead>
                                <tr>
                                    <th colSpan={3}>{"Fall 2021"}</th>
                                </tr>
                                <tr>
                                    <th>Course</th>
                                    <th>Credits</th>
                                    <th>{""}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classes.map((item, index) =>
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.credits}</td>
                                        <td>
                                            <Button
                                                color="red"
                                                onClick={() => removeRow(item.name)}>
                                                {" "}
                                                X{" "}
                                            </Button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <Table striped bordered hover className="semester">
                            <thead>
                                <tr>
                                    <th colSpan={3}>{"Spring 2022"}</th>
                                </tr>
                                <tr>
                                    <th>Course</th>
                                    <th>Credits</th>
                                    <th>{""}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classes.map((item, index) =>
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.credits}</td>
                                        <td>
                                            <Button
                                                color="red"
                                                onClick={() => {
                                                    removeRow(item.name);
                                                }}>
                                                {" "}
                                                X{" "}
                                            </Button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            )}
            <ButtonGroup>
                <Button
                    onClick={() => {
                        addT(numTable.length + 1);
                    }}>
                    + Add School Year
                </Button>
                <Button
                    variant="danger"
                    onClick={() => {
                        if (numTable.length > 0) {
                            removeTab(numTable.length);
                        }
                    }}>
                    - Delete School Year
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => {
                        setNumTable(initialTable);
                    }}>
                    Reset Plan
                </Button>
            </ButtonGroup>
        </Col>
    );
}
