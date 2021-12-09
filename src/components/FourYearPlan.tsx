import React, { useState } from "react";
import { Button, Row, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Semester } from "../interfaces/semester";
import { SemesterTable } from "./SemesterTable";
import { AddSemesterModal } from "./AddSemesterModal";
import { CourseDisplay } from "../interfaces/course";
import { ImportExport } from "./ImportExport";

/* Getting a table to render based on a list is from https://stackoverflow.com/questions/54659039/remove-table-row-using-hooks */
/* Removing from a list is from https://www.robinwieruch.de/react-remove-item-from-list */
/* Downloading CSV file code helper from https://stackoverflow.com/a/65794124/17305181*/

interface iFourYearPlan {
    semesters: Semester[];
    setSemesters: (s: Semester[]) => void;
    coursesPool: CourseDisplay[],
    setCoursesPool: (cs: CourseDisplay[]) => void;
}
export function FourYearPlan({ semesters, setSemesters, coursesPool, setCoursesPool}: iFourYearPlan): JSX.Element {
    const [show, setShow] = useState<boolean>(false);// Show the modal when adding new semester
    const [showImportExport, setShowImportExport] = useState<boolean>(false); // show modal for import and export
    return (
        <div id="plan">
            <Row xs={1} md={2} className="g-4">
                {semesters.map(sem =>
                    <SemesterTable
                        key={sem.season + sem.year}
                        sem={sem}
                        setSemesters={setSemesters}
                        semesters={semesters}
                        coursesPool={coursesPool}
                        setCoursesPool={setCoursesPool}></SemesterTable>
                )}
            </Row>
            <Row>
                <ButtonGroup id="buttonGroup">
                    <Button
                        id="big-scope-button"
                        onClick={() => {
                            setShow(true);
                        }}>
                        + Add Semester
                    </Button>
                    <Button
                        id="big-scope-button"
                        variant="secondary"
                        onClick={() => {
                            window.location.reload();
                        }}>
                        Reset Plan
                    </Button>
                    <Button
                        id="big-scope-button"
                        variant="info"
                        onClick={() => {
                            setShowImportExport(true);
                        }}>
                        Import/Export
                    </Button>
                </ButtonGroup>
                {showImportExport &&
                    <ImportExport
                        show={showImportExport}
                        setShow={setShowImportExport}
                        semesters={semesters}
                        setSemesters={setSemesters}></ImportExport>}
            </Row>
            {show &&
                <AddSemesterModal
                    show={show}
                    setShow={setShow}
                    semesters={semesters}
                    setSemesters={setSemesters}></AddSemesterModal>
            }
        </div>
    );
}
