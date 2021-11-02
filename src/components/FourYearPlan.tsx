import React from "react";
import {Button, Row, ButtonGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import {season, Semester} from "../interfaces/semester";
import {SemesterTable} from "./SemesterTable";
import {CSVLink} from "react-csv";

// import { Course } from "../interfaces/course";

/* Getting a table to render based on a list is from https://stackoverflow.com/questions/54659039/remove-table-row-using-hooks */
/* Removing from a list is from https://www.robinwieruch.de/react-remove-item-from-list */
/* Downloading CSV file code helper from https://stackoverflow.com/a/65794124/17305181*/

interface fyp {
    semesters: Semester[];
    setSemesters: (s: Semester[]) => void;
}
interface iCSVdata {
    courseName: string;
    creditShown: string;
    gradeShown: string;
}
export function FourYearPlan({semesters, setSemesters}: fyp): JSX.Element {
    // Removes the most recently added semester in the list, does nothing if no semesters left
    function removeLastSemester(): void {
        if (semesters.length) {
            semesters.splice(-1);
            setSemesters([...semesters]);
        }
    }

    // Adds a new semester with the given title (ex. "Fall 2021") and no courses
    function addSemester(season: season, year: number): void {
        setSemesters([...semesters, {season: season, year: year, courses: []}]);
    }

    //Download JSON file trial
    const downloadJSON = async () => {
        const downloadData: Semester[] = semesters;
        const fileName = "My-Schedule";
        const json = JSON.stringify(downloadData); //Convert JSON Array to string.
        const blob = new Blob([json]); //Convert JSON string to BLOB.
        const fileDownloadUrl = await URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = fileDownloadUrl;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    //Download CSV file trial
    const CSVheaders = [
        {label: "Course", key: "courseName"},
        {label: "Credits", key: "creditShown"},
        {label: "Grade", key: "gradeShown"},
    ];
    const CSVdata: iCSVdata[] = [];
    semesters.forEach(item => {
        CSVdata.push({
            courseName: item.courses[0]?.info.code,
            creditShown: item.courses[0]?.info.credits,
            gradeShown: item.courses[0]?.grade,
        });
        for (let i = 1; i < item.courses.length; i++) {
            const nlist = item.courses[i];
            CSVdata.push({
                courseName: nlist.info.code,
                creditShown: nlist.info.credits,
                gradeShown: nlist.grade,
            });
        }
    });
    return (
        <div id="plan">
            <h2 className="subtitle">Four Year Plan</h2>
            <Row xs={1} md={2} className="g-4">
                {semesters.map(semester => 
                    <div key={semester.season + semester.year}>
                        <SemesterTable
                            sem={semester}
                            setSemesters={setSemesters}
                            semesters={semesters}></SemesterTable>
                    </div>
                )}
            </Row>
            <Row>
                <ButtonGroup id="buttonGroup">
                    <Button
                        id="big-scope-button"
                        onClick={() => {
                            addSemester(season.summer, 2022);
                            console.log(CSVdata);
                        }}>
                        + Add Semester
                    </Button>
                    <Button
                        id="big-scope-button"
                        variant="danger"
                        onClick={() => {
                            removeLastSemester();
                        }}>
                        - Delete Semester
                    </Button>
                    <Button
                        id="big-scope-button"
                        variant="secondary"
                        onClick={() => {
                            window.location.reload();
                        }}>
                        Reset Plan
                    </Button>
                </ButtonGroup>
            </Row>
            <Row>
                <ButtonGroup id="buttonGroup">
                    <Button id="big-scope-button" variant="info">
                        <CSVLink id="csvlink" data={CSVdata} headers={CSVheaders} separator={","}>
                            Download as .CSV
                        </CSVLink>
                    </Button>
                    <Button id="big-scope-button" variant="info" onClick={downloadJSON}>
                        Download as .JSON
                    </Button>
                </ButtonGroup>
            </Row>
        </div>
    );
}
