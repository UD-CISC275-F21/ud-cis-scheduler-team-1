import React from "react";
import { Col, Table } from "react-bootstrap";
import "../App.css";

/* Getting a table to render based on a list is from https://stackoverflow.com/questions/54659039/remove-table-row-using-hooks */

const classes = [
    {name: "EGGG101 Introduction to Engineering", credits: 2},
    {name: "CISC108 Introduction to Computer Science I", credits: 3},
    {name: "MATH241 Analytic Geometry and Calculus A", credits: 3},
    {name: "ENGL110 Seminar in Composition", credits: 3},
    {name: "ARTH237 Art in Tibet", credits: 3},

];



export function Semester(): JSX.Element {

    return <Col>
        <h2 className = "subtitle">Four Year Plan</h2>
        <Table striped bordered hover className="semester">
            <thead>
                <tr>
                    <th>{"Fall 2021"}</th>
                    <th>{""}</th>
                </tr>
                <tr>
                    <th>Course</th>
                    <th>Credits</th>
                </tr>
            </thead>
            <tbody>
                {classes.map((item, index) =>(
                    <tr key ={index}>
                        <td>{item.name}</td>
                        <td>{item.credits}</td>
                    </tr>

                ))}
            </tbody>
        </Table>
    </Col>;
}