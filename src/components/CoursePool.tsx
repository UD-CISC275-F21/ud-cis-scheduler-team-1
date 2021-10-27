import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import "../App.css";
import { Course } from "../interfaces/course";
import { findCourse } from "../utilities/findCourse";

export function CoursePool(): JSX.Element {
    const [inpu, setInpu] = useState<string>("");
    const [courses, setCourses] = useState<Course[]>([]);

    function courseExists(code:string):boolean{
        return courses.some(function(el:Course) {
            return el.code === code;
        });         
    }

    function addCourse(name: string): void {
        const course:Course = findCourse(name);
        console.log(course);
        if(course.name === ""){
            alert("Course Does not Exist");
        }else{
            if(courseExists(name)){
                alert("Course is Already in Pool");
            } else{
                setCourses([...courses, course]);
            }
        }
    }

    return<Col>
        <h2 className = "subtitle">Course Pool</h2>
        <Form>
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
            <div key = {course.code}>
                {course.code} {course.name}
            </div>
        )}
    </Col>;
}