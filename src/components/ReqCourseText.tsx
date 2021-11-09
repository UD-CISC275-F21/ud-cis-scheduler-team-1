import React from "react";
import Titles from "../data/keyToTitle.json";
interface reqCourseText {
    courseKeys : string[];
    fulfilled : boolean;
}

const TITLES: Record<string,Record<string,string>> = Titles;
console.log(Object.keys(TITLES));

export function ReqCourseText({courseKeys, fulfilled}: reqCourseText): JSX.Element {
    
    function getTitle(key: string) {
        if (Object.keys(TITLES).includes(key)) {
            return TITLES[key]["title"];
        }
        return key;
    }

    if (fulfilled) {
        return <div>{courseKeys.map(key => <li key={key}><del>{getTitle(key)}</del></li>)}</div>;
    } else {
        return <div>{courseKeys.map(key => <li key={key}>{getTitle(key)}</li>)}</div>;
    }
}
