import React from "react";
import Titles from "../data/keyToTitle.json";
import "../App.css"
;interface reqCourseText {
    courseKeys : string[];
    fulfilled : boolean;
}

const TITLES: Record<string,Record<string,string>> = Titles;

export function ReqCourseText({courseKeys, fulfilled}: reqCourseText): JSX.Element {
    
    // Retrieves the title for a given key
    function getTitle(key: string) {
        if (Object.keys(TITLES).includes(key)) {
            return TITLES[key]["title"];
        }
        return key;
    }

    // Returns either crossed out or not crossed out list
    if (fulfilled) {
        return <div>{courseKeys.map(key => <li key={key}><del>{getTitle(key)}</del></li>)}</div>;
    } else {
        return <div>{courseKeys.map(key => <li key={key}>{getTitle(key)}</li>)}</div>;
    }
}
