import React, {useState} from "react";
import {Button, Col, Table} from "react-bootstrap";
import {season, Semester} from "../interfaces/semester";
import {SemesterTitleEdit} from "./SemesterTitleEdit";
import {CourseDisplay} from "../interfaces/course";
import {CourseModal} from "./CourseModal";
import "../App.css";
import { useDrop } from "react-dnd";

/* Getting a table to render based on a list is from https://stackoverflow.com/questions/54659039/remove-table-row-using-hooks */
/* Removing from a list is from https://www.robinwieruch.de/react-remove-item-from-list */
/* Drag and Drop came from https://medium.com/nmc-techblog/easy-drag-and-drop-in-react-22778b30ba37 */

interface semesterTable {
    sem: Semester;
    setSemesters: (s: Semester[]) => void;
    semesters: Semester[];
}

export function SemesterTable({sem, setSemesters, semesters}: semesterTable): JSX.Element {
    const [semester, setSemester] = useState<Semester>(sem);
    const [semesterCourses, setSemesterCourses] = useState<CourseDisplay[]>();    
    const [show, setShow] = useState<boolean>(false); //To show Modal when Course is clicked
    const [mod, setMod] = useState<CourseDisplay>(semester.courses[0]); // staging the changed info before save
    // Removes a course from a semester based on its name
    function removeCourse(name: string): void {
        setSemester({...semester, courses: semester.courses.filter(course => course.info.name !== name)});
        sem = semester;
    }

    function removeSemester(season: season, year: number): void {
        setSemesters([...semesters.filter(semester => (semester.season !== season) && (semester.year !== year))]);
    }

    /*const [{ isOver }, dropRef] = useDrop({
        accept: "course",
        drop: (item:CourseDisplay) => setSemesterCourses((semesterCourses) => 
            !semesterCourses.includes(item) ? [...semesterCourses, item] : semesterCourses),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });*/

    return (
        <Col>
            <Table striped bordered hover className="semester">
                <thead>
                    <tr>
                        <th colSpan={3}><SemesterTitleEdit semester={semester} setSemester={setSemester}></SemesterTitleEdit></th>
                        <th>
                            <Button variant="outline-dark" onClick={() => removeSemester(semester.season, semester.year)}>
                                X
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
                        <tr key={course.info.name}>
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
                            <td>{course.info.credits}</td>
                            <td>{course.grade}</td>
                            <td>
                                <Button variant="outline-dark" onClick={() => removeCourse(course.info.name)}>
                                    {" "}
                                    X{" "}
                                </Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Button
                variant="secondary"
                onClick={() => {
                    setSemester({...semester, courses: []});
                }}>
                Delete All Courses
            </Button>
            {show && <CourseModal
                show ={show}
                setShow={setShow}
                semester={semester}
                setSemester={setSemester}
                mod={mod}
                setMod={setMod}></CourseModal>}
        </Col>
    );
}
