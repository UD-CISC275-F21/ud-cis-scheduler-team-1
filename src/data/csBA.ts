import { Semester } from "../interfaces/semester";
import { findCourse } from "../utilities/findCourse";
import {noTech, accumulateCourses, findCommonCourses, secondWrite, dle, firstYearExp, capstone, multiCult, groupA, groupB, groupC, groupD, requirementList, totalCredits } from "./univReqs";

/*export interface CSBA {
    "univ": univReqs,
    //Course work for the four groups cannot be all of same prefix
    "aExtra": boolean, //same as Group A for univ, cannot overlap 6 cr
    "bExtra": boolean, //cannot overlap 6 cr
    "cExtra": boolean, //cannot overlap 6 cr
    "dExtra": boolean, //cannot overlap 7 cr, 4 must be natural scince with lab
    "lang": boolean, //completion of 107, 112, or 202 level language course
    "secondWrite": boolean, //Second writing requirement, approved by Col A&S
    // For the following, if there is no prefix, it means CISC
    "108": boolean,
    "181": boolean,
    "210": boolean,
    "220": boolean,
    "260": boolean,
    "275": boolean,
    "fifteenAt301": boolean, //Must be tech electives, excludes noTech Courses
    "MATH 210": boolean,
    "MATH 241": boolean,
    "124": boolean          //124 Credits needed to graduate
}*/ //Old interface, kept to see reqs

const languages = ["GREK 202", "CHIN 107", "FREN 107", "GRMN 107", "ITAL 107", "JAPN 107", "JAPN 202", "LATN 202", "RUSS 107", "SPAN 107"];

export function updateCSBA(semesters: Semester[]): requirementList {
    const totalCreds = totalCredits(semesters);
    let courseNames = accumulateCourses(semesters);
    let e110 = false;
    let fys = false;
    let dles = false;
    let multi = false;
    let groupa = false;
    let groupb = false;
    let groupc = false;
    let groupd = false;
    let caps = false;
    let aExtra = false;
    let bExtra = false;
    let cExtra = false;
    let dExtra = false;
    let lang = false;
    let secondWrites = false;
    let c108 = false;
    let c181 = false;
    let c210 = false;
    let c220 = false;
    let c260 = false;
    let c275 = false;
    let fifteenat301 = false;
    let m210 = false;
    let m241 = false;
    let total124 = false;
    if(totalCreds >= 124){
        total124 = true;
    }
    //check specific courses
    if(courseNames.includes("ENGL 110")){
        e110 = true;
        courseNames = courseNames.filter(key => key != "ENGL 110");
    }
    if(courseNames.includes("CISC 108")){
        c108 = true;
        courseNames = courseNames.filter(key => key != "CISC 108");
    }
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
    if(courseNames.includes("CISC 260")){
        c260 = true;
        courseNames = courseNames.filter(key => key != "CISC 260");
    }
    if(courseNames.includes("CISC 275")){
        c275 = true;
        courseNames = courseNames.filter(key => key != "CISC 275");
    }
    if(courseNames.includes("MATH 210")){
        m210 = true;
        courseNames = courseNames.filter(key => key != "MATH 210");
    }
    if(courseNames.includes("MATH 241")){
        m241 = true;
        courseNames = courseNames.filter(key => key != "MATH 241");
    }
    //language req
    const potLang = findCommonCourses(courseNames, languages);
    if(potLang.length > 0){
        lang = true;
        courseNames = courseNames.filter(key => key != potLang[0]);
    }
    //15 more cisc courses
    let fifteen = 0;
    const match15:string[] = [];
    for(let i = 0; i < courseNames.length; i++){
        console.log(+courseNames[i][5]);
        if(courseNames[i].substr(0, 4) === "CISC" && (+courseNames[i][5] >= 3) && !noTech.includes(courseNames[i])){
            let credits:number = +findCourse(courseNames[i]).credits;
            if(!credits){
                credits = +findCourse(courseNames[i]).credits.substr(0, 2);
            }
            fifteen = fifteen + credits;
            match15.push(courseNames[i]);
        }
        if(fifteen >= 15){
            fifteenat301 = true;
            break;
        }
    }
    courseNames = courseNames.filter(key => !match15.includes(key));
    //second writing req
    const second = findCommonCourses(courseNames, secondWrite);
    if(second.length > 0){
        secondWrites = true;
    }
    //breadth
    const discov = findCommonCourses(courseNames, dle);
    if(discov.length > 0){
        dles = true;
    }
    const first = findCommonCourses(courseNames, firstYearExp);
    if(first.length > 0){
        fys = true;
    }
    const capstones = findCommonCourses(courseNames, capstone);
    if(capstones.length > 0){
        caps = true;
    }
    const cultural = findCommonCourses(courseNames, multiCult);
    if(cultural.length > 0){
        multi = true;
    }
    const a = findCommonCourses(courseNames, groupA);
    if(a.length >= 1){
        groupa = true;
    }
    if(a.length >= 3){
        aExtra = true;
    }
    const b = findCommonCourses(courseNames, groupB);
    if(b.length >= 1){
        groupb = true;
    }
    if(b.length >= 3){
        bExtra = true;
    }
    const c = findCommonCourses(courseNames, groupC);
    if(c.length >= 1){
        groupc = true;
    }
    if(c.length >= 3){
        cExtra = true;
    }
    const d = findCommonCourses(courseNames, groupD);
    if(d.length >= 1){
        groupd = true;
    }
    if(d.length >= 3){
        dExtra = true;
    }


    return {"requirements":
    [{"requirement": "ENGL 110", "satisfied":e110},  
        {"requirement": "FYS", "satisfied": fys},       
        {"requirement":"DLE",  "satisfied":dles},       
        {"requirement":"Multi", "satisfied":multi},     
        {"requirement":"groupA", "satisfied":groupa},    
        {"requirement":"groupB", "satisfied":groupb},    
        {"requirement":"groupC", "satisfied":groupc},    
        {"requirement":"groupD", "satisfied":groupd},    
        {"requirement":"capstone", "satisfied":caps},
        {"requirement":"aExtra", "satisfied":aExtra},
        {"requirement":"bExtra", "satisfied":bExtra},
        {"requirement":"cExtra", "satisfied":cExtra},
        {"requirement":"dExtra", "satisfied":dExtra},
        {"requirement":"lang", "satisfied":lang},
        {"requirement":"secondWrite", "satisfied":secondWrites},
        {"requirement":"108","satisfied":c108}, 
        {"requirement":"181", "satisfied":c181},
        {"requirement":"210", "satisfied":c210},
        {"requirement":"220", "satisfied":c220},
        {"requirement":"260", "satisfied":c260},
        {"requirement":"275", "satisfied":c275},
        {"requirement":"fifteenAt301", "satisfied":fifteenat301},
        {"requirement":"MATH 210", "satisfied":m210}, 
        {"requirement":"MATH 241", "satisfied":m241},
        {"requirement":"124", "satisfied":total124}]
    };
}