import React, {useState} from "react";
import {Button, Col, Table, Form} from "react-bootstrap";
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
    //const [semesterCourses, setSemesterCourses] = useState<CourseDisplay[]>();    
    const [show, setShow] = useState<boolean>(false); //To show Modal when Course is clicked
    const [mod, setMod] = useState<CourseDisplay>(semester.courses[0]); // staging the changed info before save
    // Removes a course from a semester based on its name
    function removeCourse(name: string): void {
        setSemester({ ...semester, courses: semester.courses.filter(course => course.info.name !== name) });
        sem = semester;
    }

    function removeSemester(season: season, year: number): void {
        setSemesters([...semesters.filter(semester => (semester.season !== season) && (semester.year !== year))]);
    }

    function updateSemesters():void{
        let tmp:Semester[] = [];
        for(let i = 0; i < semesters.length; i++){
            if((semesters[i].year === semester.year) && (semesters[i].season === semester.season)){
                tmp = [...tmp, semester];
            }else{
                tmp = [...tmp, semesters[i]];
            }
        }
        setSemesters(tmp);
    }

    const [{ isOver }, dropRef] = useDrop({
        accept: "course",
        drop: (item:CourseDisplay) => {
            if(!semester.courses.includes(item)){
                const newSem : Semester = semester;
                newSem.courses = [...semester.courses, item];
                setSemester(newSem);
                updateSemesters();
            }else{
                alert("Course is Already in Semester");
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    function updateGrades(sem:Semester, course:CourseDisplay):CourseDisplay[]{
        let tmp:CourseDisplay[] = [];
        for(let i = 0; i < sem.courses.length; i++){
            if(sem.courses[i].info.code === course.info.code){
                tmp = [...tmp, course];
            }else{
                tmp = [...tmp, sem.courses[i]];
            }
        }
        return tmp;        
    }

    return (
        <Col ref = {dropRef}>
            <Table striped bordered hover className="semester">
                <thead>
                    <tr>
                        <th colSpan={3}><SemesterTitleEdit semester={semester} setSemester={setSemester}></SemesterTitleEdit></th>
                        <th>
                            <Button size="sm" variant="outline-danger" onClick={() => removeSemester(semester.season, semester.year)}>
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
                            <td>
                                <a
                                    onClick={() => {
                                        setShow(true);
                                        setMod({...course});
                                    }}>
                                    {course.info.code}
                                    <br></br>
                                    {course.info.name}
                                </a>
                            </td>
                            <td>{course.info.credits}</td>
                            <td><Form>
                                <Form.Select size="sm" aria-label="Select grade" defaultValue="-"
                                    onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => {
                                        course = {...course, grade: ev.target.value as string};
                                        console.log(course);
                                        const newSem = semester;
                                        newSem.courses = updateGrades(newSem, course);
                                        console.log(newSem);
                                        setSemester(newSem);
                                        console.log(semester);
                                        updateSemesters();
                                        console.log(semesters);
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
                                    {" "}
                                    X{" "}
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
                show ={show}
                setShow={setShow}
                semester={semester}
                setSemester={setSemester}
                mod={mod}
                setMod={setMod}></CourseModal>}
        </Col>
    );
}
