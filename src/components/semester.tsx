import React from "react";
import { Col } from "react-bootstrap";
import "../App.css";

export function Semester(): JSX.Element {

    return <Col>
        <h2 className = "subtitle">Four Year Plan</h2>
        <table className="semester">
            <thead>
                <tr><th>{"Fall 2021"}</th></tr>
            </thead>
            <tbody>
                <tr>
                    <th>Course</th>
                    <th>Credits</th>
                </tr>
                <tr>
                    <td>{"EGGG101 Introduction to Engineering"}</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>{"CISC108 Introduction to Computer Science I"}</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>{"MATH241 Analytic Geometry and Calculus A"}</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>{"ENGL110 Seminar in Composition"}</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>{"ARTH237 Art in Tibet"}</td>
                    <td>3</td>
                </tr>
            </tbody>
        </table>
    </Col>;
}