import React from "react";

interface reqCourseText {
    courseKey : string;
    fulfilled : boolean;
}

export function ReqCourseText({courseKey, fulfilled}: reqCourseText): JSX.Element {

    if (fulfilled) {
        return <p>{courseKey}</p>;
    } else {
        return <p><del>{courseKey}</del></p>;
    }
}