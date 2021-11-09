import { Semester } from "../interfaces/semester";
import { accumulateCourses } from "./univReqs";


export interface CSMinor{
    "intro": boolean, //CISC 106 or CISC 108
    "181": boolean,
    "210": boolean,
    "220": boolean,
    "6 Extra": boolean
}

export function CSMinorUpdate(semesters:Semester[]):CSMinor{
    let intro = false;
    let c181 = false;
    let c210 = false;
    let c220 = false;
    let extra6 = false;

    const cours = accumulateCourses(semesters);
    let courseNames = Array.from(cours.keys());

    if(courseNames.includes("CISC 181")){
        c181 = true;
        courseNames = courseNames.filter(key => key != "CISC 181");
    }
    if(courseNames.includes("CISC 210")){
        c210 = true;
        courseNames = courseNames.filter(key => key != "CISC 210");
    }
    if(courseNames.includes("CISC 220")){
        c220 = true;
        courseNames = courseNames.filter(key => key != "CISC 220");
    }
    if(courseNames.includes("CISC 106")){
        intro = true;
        courseNames = courseNames.filter(key => key != "CISC 106");
    } else if(courseNames.includes("CISC 108")){
        intro = true;
        courseNames = courseNames.filter(key => key != "CISC 108");
    }
    let total = 0;
    for(let i = 0; i < courseNames.length; i++){
        if(courseNames[i].substr(0, 4) === "CISC" && !["CISC 355", "CISC 356"].includes(courseNames[i])){
            total = total + 3;
            courseNames = courseNames.filter(key => key != courseNames[i]);
        }
    }
    if(total >= 6){
        extra6 = true;
    }

    return {
        "intro": intro, //CISC 106 or CISC 108
        "181": c181,
        "210": c210,
        "220": c220,
        "6 Extra": extra6
    };
}