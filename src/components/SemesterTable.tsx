
import React from "react";
import { Button, Col, Table} from "react-bootstrap";
import { Semester } from "../interfaces/semester";

export function SemesterTable({ semester }: { semester: Semester }): JSX.Element {

    // Removes a course from a semester based on its name
    function removeCourse(name: string): void {
        semester.courses = [...semester.courses.filter(course => course.name != name)];
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
                {semester.courses.map((course) =>
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
