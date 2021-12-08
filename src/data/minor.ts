import { Semester } from "../interfaces/semester";
import { accumulateCourses, requirementList } from "./univReqs";

/*export interface CSMinor{
    "intro": boolean, //CISC 106 or CISC 108
    "181": boolean,
    "210": boolean,
    "220": boolean,
    "6 Extra": boolean
}*/ //Old interface that was used, was left in to specify requirements of minor


export function CSMinorUpdate(semesters:Semester[]):requirementList{
    let intro = false;
    let c181 = false;
    let c210 = false;
    let c220 = false;
    let extra6 = false;

    const cours = accumulateCourses(semesters);
    let courseNames = Array.from(cours.keys());
    
    if(courseNames.includes("CISC 181")){ //checks for 181
        c181 = true;
        courseNames = courseNames.filter(key => key != "CISC 181");
    }
    if(courseNames.includes("CISC 210")){ //checks for 210
        c210 = true;
        courseNames = courseNames.filter(key => key != "CISC 210");
    }
    if(courseNames.includes("CISC 220")){ //checks for 220
        c220 = true;
        courseNames = courseNames.filter(key => key != "CISC 220");
    }
    if(courseNames.includes("CISC 106")){ //checks for 106 or 108
        intro = true;
        courseNames = courseNames.filter(key => key != "CISC 106");
    } else if(courseNames.includes("CISC 108")){
        intro = true;
        courseNames = courseNames.filter(key => key != "CISC 108");
    }
    let total = 0;
    const match300:string[] = [];
    for(let i = 0; i < courseNames.length; i++){  //checks if the extra electives are present, is still buggy
        if(courseNames[i].substr(0, 4) === "CISC" && !["CISC 355", "CISC 356"].includes(courseNames[i])){
            total = total + 3;
            match300.push(courseNames[i]);
            //courseNames = courseNames.filter(key => key != courseNames[i]);
        }
    }
    courseNames = courseNames.filter(key => !match300.includes(key));
    if(total >= 6){
        extra6 = true;
    }

    //returns updated object 
    return {"requirements": 
    [{"requirement": "intro", "satisfied": intro}, 
        {"requirement":"181", "satisfied": c181}, 
        {"requirement":"210", "satisfied": c210}, 
        {"requirement":"220", "satisfied": c220}, 
        {"requirement":"6 Extra", "satisfied": extra6}],};
}