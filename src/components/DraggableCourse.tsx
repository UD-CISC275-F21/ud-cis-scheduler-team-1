// Drag and Drop used https://medium.com/nmc-techblog/easy-drag-and-drop-in-react-22778b30ba37

import React from "react";
import { useDrag } from "react-dnd";
import { CourseDisplay } from "../interfaces/course";

interface dragClass{
    course:CourseDisplay
}

export function DraggableCourse({course}: dragClass): JSX.Element {
    const [{ isDragging }, dragRef] = useDrag({
        type: "course",
        item: course,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });
    return (
        <div ref={dragRef}>
            {course.info.code} {course.info.name}
            {isDragging}
        </div>
    );
}