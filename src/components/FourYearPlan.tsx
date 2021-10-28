import React from "react";
import { Button, Row, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { season, Semester } from "../interfaces/semester";
import { SemesterTable } from "./SemesterTable";
// import { Course } from "../interfaces/course";

/* Getting a table to render based on a list is from https://stackoverflow.com/questions/54659039/remove-table-row-using-hooks */
/* Removing from a list is from https://www.robinwieruch.de/react-remove-item-from-list */

interface fyp {
    semesters: Semester[],
    setSemesters: (s: Semester[]) => void

}


export function FourYearPlan({ semesters, setSemesters }: fyp): JSX.Element {

    // Removes the most recently added semester in the list, does nothing if no semesters left
    function removeLastSemester(): void {
        if (semesters.length) {
            semesters.splice(-1);
            setSemesters([...semesters]);
        }
    }

    // Adds a new semester with the given title (ex. "Fall 2021") and no courses
    function addSemester(season: season, year: number): void {
        setSemesters([...semesters, { season: season, year: year, courses: [] }]);
    }

    return <div id="plan">
        <h2 className="subtitle">Four Year Plan</h2>
        <Row xs={1} md={2} className="g-4">
            {semesters.map((semester) => <div key={semester.season + semester.year}>
                <SemesterTable sem={semester} setSemesters={setSemesters} semesters={semesters}></SemesterTable>
            </div>)}
        </Row>
        <Row>
            <ButtonGroup>
                <Button
                    onClick={() => {
                        addSemester(season.summer, 2022);
                    }}>
                    + Add Semester
                </Button>
                <Button
                    variant="danger"
                    onClick={() => {
                        removeLastSemester();
                    }}>
                    - Delete Semester
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => {
                        window.location.reload();
                    }}>
                    Reset Plan
                </Button>
            </ButtonGroup>
        </Row>
    </div>;
}