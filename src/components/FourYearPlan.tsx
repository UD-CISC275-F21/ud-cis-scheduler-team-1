import React, { useState } from "react";
import { Button, Col, Row, Table, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Semester } from "../interfaces/semester";
import { SingleSemesterViewer } from "./singleSemesterViewer";

/* Getting a table to render based on a list is from https://stackoverflow.com/questions/54659039/remove-table-row-using-hooks */
/* Removing from a list is from https://www.robinwieruch.de/react-remove-item-from-list */

export function FourYearPlan({ semesters, setSemesters }:
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
        setSemesters([...semesters, { title: title, courses: [] }]);
    }

    return <div id="plan">
        <h2 className="subtitle">Four Year Plan</h2>
        <Row xs={1} md={2} className="g-4">
            {semesters.map((semester) => (<div key={semester.title}>
                <SingleSemesterViewer semester={semester}></SingleSemesterViewer>
            </div>))}
        </Row>
    </div>;
}