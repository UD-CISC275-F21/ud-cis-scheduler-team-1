import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import "../App.css";
import { Course, CourseDisplay } from "../interfaces/course";
import { findCourse } from "../utilities/findCourse";
import {DraggableCourse} from "./DraggableCourse";
import "../App.css";

export function CoursePool(): JSX.Element {
    const [inpu, setInpu] = useState<string>("");
    const [courses, setCourses] = useState<CourseDisplay[]>([]);

    function courseExists(code:string):boolean{
        return courses.some(function(el:CourseDisplay) {
            return el.info.code === code;
        });         
    }

    function addCourse(name: string): void {
        const course:Course = findCourse(name);
        if(course.name === ""){
            alert("Course Does not Exist");
        }else{
            if(courseExists(name)){
                alert("Course is Already in Pool");
            } else{
                setCourses([...courses, {info:course, grade:"-"}]);
            }
        }
    }

    return<Col>
        <h2 className = "subtitle">Course Pool</h2>
        <Form id= "searchBar" onSubmit={(event)=>{
            addCourse(inpu);
            event.preventDefault();
        }}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter desired course like so: ACCT 207</Form.Label>
                <Form.Control value = {inpu} type="text" placeholder="Coure Code" onChange={e=>setInpu(e.target.value)} />
            </Form.Group>
            <Button onClick={() => {
                addCourse(inpu);
            }}>
            Add Course  
            </Button>
        </Form>
        {courses.map(course => 
            <div key = {course.info.code}>
                <DraggableCourse course = {course}></DraggableCourse>
            </div>
        )}
    </Col>;
}