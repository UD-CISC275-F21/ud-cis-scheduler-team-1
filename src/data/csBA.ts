import { Semester } from "../interfaces/semester";
import { findCourse } from "../utilities/findCourse";
import { univReqs, noTech, accumulateCourses, findCommonCourses, secondWrite, dle, firstYearExp, capstone, multiCult, groupA, groupB, groupC, groupD } from "./univReqs";

export interface CSBA {
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
}

const languages = ["GREK 202", "CHIN 107", "FREN 107", "GRMN 107", "ITAL 107", "JAPN 107", "JAPN 202", "LATN 202", "RUSS 107", "SPAN 107"];

export function updateCSBA(semesters: Semester[]): CSBA {
    let totalCreds = 0;
    for (let i = 0; i < semesters.length; i++){
        for (let j = 0; j < semesters[i].courses.length; j++){
            totalCreds = totalCreds + +semesters[i].courses[j].info.credits;
        }
    }
    const cours = accumulateCourses(semesters);
    let courseNames = Array.from(cours.keys());
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
    for(let i = 0; i < courseNames.length; i++){
        if(courseNames[i].substr(0, 4) === "CISC" && (+courseNames[i][4] >= 3) && !noTech.includes(courseNames[i])){
            fifteen = fifteen + +findCourse(courseNames[i]).credits;
            courseNames = courseNames.filter(key => key != courseNames[i]); 
            i = i - 1;
        }
        if(fifteen >= 15){
            fifteenat301 = true;
            break;
        }
    }
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

    const univ:univReqs =  {
        "ENGL 110": e110,  
        "FYS": fys,       
        "DLE": dles,       
        "Multi": multi,     
        "groupA": groupa,    
        "groupB": groupb,    
        "groupC": groupc,    
        "groupD": groupd,    
        "capstone": caps,
    };

    return {"univ": univ, "aExtra": aExtra, "bExtra": bExtra, "cExtra": cExtra, "dExtra": dExtra, 
        "lang": lang, "secondWrite": secondWrites, "108": c108, "181": c181, 
        "210": c210, "220": c220, "260": c260, "275": c275, "fifteenAt301": fifteenat301, 
        "MATH 210": m210, "MATH 241": m241, "124": total124};
}