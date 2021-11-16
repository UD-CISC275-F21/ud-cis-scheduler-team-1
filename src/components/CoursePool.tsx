import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Course, CourseDisplay } from "../interfaces/course";
import { findCourse, getAllCourses } from "../utilities/findCourse";
import {DraggableCourse} from "./DraggableCourse";
import "../App.css";
import { Autocomplete, TextField } from "@mui/material";

//Autocomplete came from https://mui.com/components/autocomplete/#useautocomplete

interface coursePl{
    coursesPool: CourseDisplay[],
    setCoursesPool: (cs: CourseDisplay[]) => void;
}

export function CoursePool({coursesPool, setCoursesPool}: coursePl): JSX.Element {
    const [inpu, setInpu] = useState<string>("");

    //check if course already in course pool
    function courseExists(code:string):boolean{
        return coursesPool.some(function(el:CourseDisplay) {
            return el.info.code === code;
        });         
    }

    //check course existence then add course in course pool
    function addCourse(name: string): void {
        const course:Course = findCourse(name);
        if(course.name === ""){
            alert("Course Does not Exist");
        }else{
            if(courseExists(name)){
                alert("Course is Already in Pool");
            } else{
                setCoursesPool([...coursesPool, {info:course, grade:"-"}]);
            }
        }
    }

    return<Col id="move-when-scroll" >
        <h2 className = "subtitle">Course Pool</h2>
        <Form id= "searchBar" onSubmit={(event)=>{
            addCourse(inpu);
            event.preventDefault();
        }}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter the desired course code:</Form.Label>
                <Autocomplete onChange={(event, value) => {
                    setInpu(value as string); event.preventDefault();
                }} disablePortal id="combo-box-demo" options = {getAllCourses()} renderInput= {(params) => <TextField {...params} label = "Course Code"/>}/>
            </Form.Group>
            <Button onClick={() => {
                addCourse(inpu);
            }}>
            Add Course  
            </Button>
        </Form>
        {coursesPool.map(course => 
            <div key = {course.info.code}>
                <DraggableCourse course = {course}></DraggableCourse>
            </div>
        )}
    </Col>;
}