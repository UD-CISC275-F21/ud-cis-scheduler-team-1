import React, { useState } from "react";
import { Button, Col, Table, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { CourseDisplay } from "../interfaces/course";
import { CourseModal } from "./CourseModal";
import "../App.css";
import { useDrop } from "react-dnd";

/* Getting a table to render based on a list is from https://stackoverflow.com/questions/54659039/remove-table-row-using-hooks */
/* Removing from a list is from https://www.robinwieruch.de/react-remove-item-from-list */
/* Drag and Drop came from https://medium.com/nmc-techblog/easy-drag-and-drop-in-react-22778b30ba37 */

interface semesterTable {
    sem: Semester;
    setSemesters: (s: Semester[]) => void;
    semesters: Semester[];
    coursesPool: CourseDisplay[],
    setCoursesPool: (cs: CourseDisplay[]) => void;
}

export function SemesterTable({ sem, setSemesters, semesters, coursesPool, setCoursesPool }: semesterTable): JSX.Element {
    const [semester, setSemester] = useState<Semester>(sem);
    const [show, setShow] = useState<boolean>(false); //To show Modal when Course is clicked
    const [mod, setMod] = useState<CourseDisplay>(semester.courses[0]); // staging the changed info before save

    // Removes a course from a semester based on its name
    function removeCourse(name: string): void {
        const newSem: Semester = semester;
        newSem.courses = [...semester.courses.filter(course => course.info.name !== name)];
        setSemester(newSem);
        updateSemesters();
    }

    function removeSemester(sem: Semester): void {
        setSemesters([...semesters.filter(semester => semester.season + semester.year !== sem.season + sem.year)]);
    }

    function updateSemesters(): void {
        let tmp: Semester[] = [];
        for (let i = 0; i < semesters.length; i++) {
            if ((semesters[i].year === semester.year) && (semesters[i].season === semester.season)) {
                tmp = [...tmp, semester];
            } else {
                tmp = [...tmp, semesters[i]];
            }
        }
        setSemesters(tmp);
    }

    function semesterHasCourse(courses: CourseDisplay[], item: CourseDisplay): boolean {
        for (let i = 0; i < courses.length; i++) {
            if (courses[i].info.code === item.info.code) {
                return true;
            }
        }
        return false;
    }

    const [{ isOver }, dropRef] = useDrop({
        accept: "course",
        drop: (item: CourseDisplay) => {
            if (!semesterHasCourse(semester.courses, item)) {
                const newSem: Semester = semester;
                newSem.courses = [...semester.courses, item];
                setSemester(newSem);
                updateSemesters();
                const newCP = coursesPool.filter(course => course.info.code !== item.info.code);
                coursesPool = newCP;
                setCoursesPool(newCP);
                console.log(coursesPool);
                alert("This course has the following prerequisites: " + item.info.preReq);
            } else {
                alert("Course is Already in Semester");
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    function updateGrades(sem: Semester, course: CourseDisplay): CourseDisplay[] {
        let tmp: CourseDisplay[] = [];
        for (let i = 0; i < sem.courses.length; i++) {
            if (sem.courses[i].info.code === course.info.code) {
                tmp = [...tmp, course];
            } else {
                tmp = [...tmp, sem.courses[i]];
            }
        }
        return tmp;
    }

    return (
        <Col ref={dropRef}>
            <Table striped bordered hover className="semester">
                <thead>
                    <tr>
                        <th colSpan={3}>{semester.season}{" "}{semester.year}</th>
                        <th>
                            <Button size="sm" variant="outline-danger" onClick={() => removeSemester(semester)}>
                                X
                            </Button>
                        </th>
                    </tr>
                    <tr>
                        <th>Course</th>
                        <th>Credits</th>
                        <th>Grade</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {semester.courses.map(course =>
                        <tr key={course.info.name}>
                            <OverlayTrigger placement="right"  delay={{ show: 1000, hide: 0 }} overlay={<Tooltip id="tooltip-disabled">Click to edit information!</Tooltip>}>
                                <td>
                                    <a
                                        onClick={() => {
                                            setShow(true);
                                            setMod(JSON.parse(JSON.stringify(course)));
                                        }}>
                                        {course.info.code}
                                        <br></br>
                                        {course.info.name}
                                    </a>
                                </td>
                            </OverlayTrigger>
                            <td>{course.info.credits}</td>
                            <td><Form>
                                <Form.Select size="sm" aria-label="Select grade" defaultValue="-"
                                    onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => {
                                        course = { ...course, grade: ev.target.value as string };
                                        const newSem = semester;
                                        newSem.courses = updateGrades(newSem, course);
                                        setSemester(newSem);
                                        updateSemesters();
                                    }}>
                                    <option value={"-"}>-</option>
                                    <option value={"A"}>A</option>
                                    <option value={"A-"}>A-</option>
                                    <option value={"B+"}>B+</option>
                                    <option value={"B"}>B</option>
                                    <option value={"B-"}>B-</option>
                                    <option value={"C+"}>C+</option>
                                    <option value={"C"}>C</option>
                                    <option value={"C-"}>C-</option>
                                    <option value={"D+"}>D+</option>
                                    <option value={"D"}>D</option>
                                    <option value={"D-"}>D-</option>
                                    <option value={"F"}>F</option>
                                    <option value={"P"}>P</option>
                                </Form.Select>
                            </Form></td>
                            <td>
                                <Button size="sm" variant="outline-danger" onClick={() => removeCourse(course.info.name)}>
                                    X
                                </Button>
                            </td>
                        </tr>
                    )}
                    {isOver}
                </tbody>
            </Table>
            <Button
                variant="secondary"
                onClick={() => {
                    setSemester({ ...semester, courses: [] });
                }}>
                Delete All Courses
            </Button>
            {show && <CourseModal
                show={show}
                setShow={setShow}
                semester={semester}
                setSemester={setSemester}
                mod={mod}
                setMod={setMod}></CourseModal>}
        </Col>
    );
}
