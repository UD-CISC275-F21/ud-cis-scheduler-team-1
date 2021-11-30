// Drag and Drop used https://medium.com/nmc-techblog/easy-drag-and-drop-in-react-22778b30ba37

import React from "react";
import { useDrag } from "react-dnd";
import { CourseDisplay } from "../interfaces/course";

//interface for things being passed into component, we anticipate more 
// values will be needed later
interface iDragClass{
    course:CourseDisplay
}

export function DraggableCourse({course}: iDragClass): JSX.Element {
    //dragging hook from dnd package, exact copy
    const [{ isDragging }, dragRef] = useDrag({
        type: "course",
        item: course,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    //makes card looking object that can be dragged
    return (
        <div className = "dragCourse" ref={dragRef} role = "drag">
            {course.info.code} {course.info.name}
            {isDragging}
        </div>
    );
}