import React, {useState} from "react";
import {Button, Col, Table} from "react-bootstrap";
import {Course} from "../interfaces/course";
import {season, Semester} from "../interfaces/semester";
import {SemesterTitleEdit} from "./SemesterTitleEdit";

/* Getting a table to render based on a list is from https://stackoverflow.com/questions/54659039/remove-table-row-using-hooks */
/* Removing from a list is from https://www.robinwieruch.de/react-remove-item-from-list */

interface semesterTable {
    sem: Semester;
    setSemesters: (s: Semester[]) => void;
    semesters: Semester[];
}

export function SemesterTable({sem, setSemesters, semesters}: semesterTable): JSX.Element {
    const [semester, setSemester] = useState<Semester>(sem);
    // Removes a course from a semester based on its name
    function removeCourse(name: string): void {
        setSemester({...semester, courses: semester.courses.filter(course => course.name !== name)});
    }

    function removeSemester(season: season, year: number): void {
        setSemesters([...semesters.filter(semester => (semester.season !== season) && (semester.year !== year))]);
    }

    return (
        <Col>
            <Table striped bordered hover className="semester">
                <thead>
                    <tr>
                        <th colSpan={3}><SemesterTitleEdit semester={semester} setSemester={setSemester}></SemesterTitleEdit></th>
                        <th>
                            <Button color="red" onClick={() => removeSemester(semester.season, semester.year)}>
                                {" "}
                                X{" "}
                            </Button>
                        </th>
                    </tr>
                    <tr>
                        <th>Course</th>
                        <th>Credits</th>
                        <th>Grade</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {semester.courses.map(course => 
                        <tr key={course.name}>
                            <td>{course.name}</td>
                            <td>{course.credits}</td>
                            <td>{course.grade}</td>
                            <td>
                                <Button color="red" onClick={() => removeCourse(course.name)}>
                                    {" "}
                                    X{" "}
                                </Button>
                            </td>
                        </tr>
                    )}
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setSemester({...semester, courses: []});
                        }}>
                        Delete All Courses
                    </Button>
                </tbody>
            </Table>
        </Col>
    );
}
