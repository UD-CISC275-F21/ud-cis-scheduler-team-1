import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Course, CourseDisplay } from "../interfaces/course";
import { findCourse, getAllCourses } from "../utilities/findCourse";
import { DraggableCourse } from "./DraggableCourse";
import "../App.css";
import { Autocomplete, TextField } from "@mui/material";

//Autocomplete came from https://mui.com/components/autocomplete/#useautocomplete

//interface for things getting passed to component
interface iCoursePl {
    coursesPool: CourseDisplay[],  //array that has courses in poool
    setCoursesPool: (cs: CourseDisplay[]) => void;  //setter to update this array
}

// the left column of the app, holds the course select and drag and drop buttons
export function CoursePool({ coursesPool, setCoursesPool }: iCoursePl): JSX.Element {
    const [inpu, setInpu] = useState<string>(""); //string value for input for class

    //check if course already in course pool, returns true if it is, false if not
    function courseExists(code: string): boolean {
        return coursesPool.some(function (el: CourseDisplay) {
            return el.info.code === code;
        });
    }

    //check course existence then add course in course pool
    function addCourse(name: string): void {
        const course: Course = findCourse(name); //will see if inputed course is in catalog
        if (course.name === "") {
            alert("Course Does not Exist");
        } else {
            if (courseExists(name)) {
                alert("Course is Already in Pool");
            } else {
                setCoursesPool([...coursesPool, { info: course, grade: "-" }]);
            }
        }
    }

    //form came from react bootstrap
    return <Col className="sidecolumns" id="move-when-scroll" >
        <h2 className="subtitle">Course Pool</h2>
        <Form id="searchBar" onSubmit={() => {
            addCourse(inpu);
        }} 
        onKeyPress={(event) => { 
            event.key === "Enter" && event.preventDefault();
        }}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter the desired course code:</Form.Label>
                <Autocomplete onChange={(event, value) => {
                    setInpu(value as string); event.preventDefault();
                }} disablePortal id="combo-box-demo" options={getAllCourses()} renderInput={(params) => <TextField {...params} label="Course Code" />} />
            </Form.Group>
            <Button className="prettybutton" data-testid="add-Course-button" onClick={() => {
                addCourse(inpu);
            }}>
                Add Course
            </Button>
        </Form>
        {coursesPool.length === 0 && <p>Drag and drop courses from course pool into a semester.</p>}
        {coursesPool.map(course =>
            <div key={course.info.code}>
                <DraggableCourse course={course}></DraggableCourse>
            </div>
        )}
    </Col>;
}