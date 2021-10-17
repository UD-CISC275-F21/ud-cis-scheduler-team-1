import React from "react";
import { Button, Col, Table } from "react-bootstrap";
import "../App.css";
import { classTable } from "../interfaces/classTable";

/* Getting a table to render based on a list is from https://stackoverflow.com/questions/54659039/remove-table-row-using-hooks */
/* Removing from a list is from https://www.robinwieruch.de/react-remove-item-from-list */

interface indSemes{
    classes: Array<classTable>
    setClasses: (classes:Array<classTable>) => void
}

export function Semester({classes, setClasses}: indSemes): JSX.Element {
    function removeRow(name:string):void {
        const newList = classes.filter((item) => item.name != name);
        setClasses(newList);              
    } 

    return <Col>
        <h2 className = "subtitle">Four Year Plan</h2>
        <Table striped bordered hover className="semester">
            <thead>
                <tr>
                    <th>{"Fall 2021"}</th>
                    <th>{""}</th>
                    <th>{""}</th>
                </tr>
                <tr>
                    <th>Course</th>
                    <th>Credits</th>
                    <th>{""}</th>
                </tr>
            </thead>
            <tbody>
                {classes.map((item, index) =>
                    <tr key ={index}>
                        <td>{item.name}</td>
                        <td>{item.credits}</td>
                        <td><Button color ="red" onClick={() =>removeRow(item.name)}> X </Button></td>
                    </tr>
                )}
            </tbody>
        </Table>
    </Col>;
}