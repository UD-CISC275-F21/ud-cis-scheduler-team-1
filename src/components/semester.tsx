import React, {useState} from "react";
import {Button, Col, Row, Table, ButtonGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import {indSemes, iNumTable} from "../interfaces/classTable";

/* Getting a table to render based on a list is from https://stackoverflow.com/questions/54659039/remove-table-row-using-hooks */
/* Removing from a list is from https://www.robinwieruch.de/react-remove-item-from-list */

const initialTable: Array<iNumTable> = [{year: 1}];
export function Semester({classes, setClasses}: indSemes): JSX.Element {
    function removeRow(name: string): void {
        const newList = classes.filter(item => item.name != name);
        setClasses(newList);
        console.log(classes);
    }
    function addT(year: number): void {
        const newT: iNumTable = {year: year};
        setNumTable(numTable => [...numTable, newT]);
    }
    function removeTab(year: number): void {
        const newT = numTable.filter(item => item.year != year);
        setNumTable(newT);
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
            </ButtonGroup>
        </Col>
    );
}
