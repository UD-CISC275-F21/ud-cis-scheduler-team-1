
import React, { useState } from "react";
import { Button, Col, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";

export function SemesterTable({ semester }: { semester: Semester }): JSX.Element {

    const [courses, setCourses] = useState<Course[]>(semester.courses);

    // Removes a course from a semester based on its name
    function removeCourse(name: string): void {
        setCourses([...courses.filter(course => course.name !== name)]);
        semester.courses = courses;
    }

    return <Col>
        <Table striped bordered hover className="semester">
            <thead>
                <tr>
                    <th colSpan={3}>{semester.title}</th>
                </tr>
                <tr>
                    <th>Course</th>
                    <th>Credits</th>
                    <th>{""}</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course) =>
                    <tr key={course.name}>
                        <td>{course.name}</td>
                        <td>{course.credits}</td>
                        <td>
                            <Button
                                color="red"
                                onClick={() => removeCourse(course.name)}>
                                {" "}X{" "}
                            </Button>
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    </Col>;
}
