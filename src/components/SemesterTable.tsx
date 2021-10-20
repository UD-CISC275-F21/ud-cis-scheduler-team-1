import React, {useState} from "react";
import {Button, Col, Table} from "react-bootstrap";
import {Course} from "../interfaces/course";
import {Semester} from "../interfaces/semester";

/* Getting a table to render based on a list is from https://stackoverflow.com/questions/54659039/remove-table-row-using-hooks */
/* Removing from a list is from https://www.robinwieruch.de/react-remove-item-from-list */

interface semesterTable {
    semester: Semester;
    setSemester: (s: Semester[]) => void;
    semesters: Semester[];
}

export function SemesterTable({semester, setSemester, semesters}: semesterTable): JSX.Element {
    const [courses, setCourses] = useState<Course[]>(semester.courses);

    // Removes a course from a semester based on its name
    function removeCourse(name: string): void {
        setCourses([...courses.filter(course => course.name !== name)]);
        semester.courses = courses;
    }

    function removeSemester(name: string): void {
        setSemester([...semesters.filter(semester => semester.title !== name)]);
        semester.courses = courses;
    }

    return (
        <Col>
            <Table striped bordered hover className="semester">
                <thead>
                    <tr>
                        <th colSpan={3}>{semester.title}</th>
                        <th>
                            <Button color="red" onClick={() => removeSemester(semester.title)}>
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
                    {courses.map(course => 
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
                            setCourses([]);
                        }}>
                        Delete All Courses
                    </Button>
                </tbody>
            </Table>
        </Col>
    );
}