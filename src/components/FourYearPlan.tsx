import React, {useState} from "react";
import {Button, Row, ButtonGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Semester} from "../interfaces/semester";
import {SemesterTable} from "./SemesterTable";
import {CSVLink} from "react-csv";
import {AddSemesterModal} from "./AddSemesterModal";
import { CourseDisplay } from "../interfaces/course";

/* Getting a table to render based on a list is from https://stackoverflow.com/questions/54659039/remove-table-row-using-hooks */
/* Removing from a list is from https://www.robinwieruch.de/react-remove-item-from-list */
/* Downloading CSV file code helper from https://stackoverflow.com/a/65794124/17305181*/

interface iCSVdata {
    courseName: string;
    creditShown: string;
    gradeShown: string;
}
interface fyl{
    semesters : Semester[];
    setSemesters : (s : Semester[])=>void;
    coursesPool: CourseDisplay[],
    setCoursesPool: (cs: CourseDisplay[]) => void;
}
export function FourYearPlan({semesters,setSemesters, coursesPool, setCoursesPool}:fyl): JSX.Element {
    const [show, setShow] = useState(false);// Show the modal when adding new semester

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
        {label: "", key: "courseName"},
        {label: "My Schedule", key: "creditShown"},
        {label: "", key: "gradeShown"},
    ];
    const CSVdata: iCSVdata[] = [];
    semesters.forEach(item => {
        CSVdata.push({
            courseName: "",
            creditShown: "",
            gradeShown: "",
        });
        CSVdata.push({
            courseName: item.season,
            creditShown: item.year.toString(),
            gradeShown: "",
        });
        CSVdata.push({
            courseName: "Courses",
            creditShown: "Credits",
            gradeShown: "Grades",
        });
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
            <Row xs={1} md={2} className="g-4">
                {semesters.map(sem => 
                    <SemesterTable
                        key={sem.season + sem.year}
                        sem={sem}
                        setSemesters={setSemesters}
                        semesters={semesters}
                        coursesPool = {coursesPool}
                        setCoursesPool = {setCoursesPool}></SemesterTable>
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
                </ButtonGroup>
            </Row>
            <Row>
                <ButtonGroup id="buttonGroup">
                    <Button id="big-scope-button" variant="info">
                        <CSVLink
                            id="csvlink"
                            data={CSVdata}
                            headers={CSVheaders}
                            filename={"My-Schedule.csv"}>
                            Download as .CSV
                        </CSVLink>
                    </Button>
                    <Button id="big-scope-button" variant="info" onClick={downloadJSON}>
                        Download as .JSON
                    </Button>
                </ButtonGroup>
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
