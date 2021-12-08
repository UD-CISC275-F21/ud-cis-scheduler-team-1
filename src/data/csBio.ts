import { Semester } from "../interfaces/semester";
import { univReqs, accumulateCourses, findCommonCourses, dle, engineerBreadth, engineerProfess, firstYearExp, groupA, groupB, groupC, groupD, multiCult, requirementList } from "./univReqs";

const restrict = ["ANFS 300", "ANFS 310", "ANFS 470", "BISC 403", "BISC 484", "BISC 492", "CHEM 214", "CHEM 216", "CHEM 322", 
    "CHEM 326", "MATH 243"];

/*export interface CSBio {
    "univ": univReqs,
    "9 extra": boolean, //can be from Group A, B, C or engineer breadth (No math/science/tech)
    //6 must be at 300 level, or foreign lang at 107 or higher
    //Max of 6 credits can come from Career and Professional Prep

    // For the following, if there is no prefix, it means CISC
    "108": boolean,
    "181": boolean,
    "210": boolean,
    "220": boolean,
    "260": boolean,
    "275": boolean,
    "303":boolean,
    "320": boolean,
    "MATH 210": boolean,
    "MATH 241": boolean,
    "caps": boolean, //(CISC 498 + CISC 499) OR (UNIV 401 + UNIV 402)
    "writing": boolean, //ENGL 312 OR ENGL 410
    "355": boolean, //ETHICS
    // ENGL 312, ENGL 410 AND CISC 355 count for Engineer Breadth
    
    "BISC 207": boolean,
    "BISC 208": boolean,
    "BISC 401": boolean,
    "CHEM 103": boolean,
    "CHEM 133": boolean,
    "CHEM 104": boolean,
    "CHEM 134": boolean,
    "372": boolean,
    "436": boolean,
    "MATH 242": boolean,
    "MATH 349": boolean,

    "orgo": boolean, //(CHEM 213 + CHEM 215) OR (CHEM 321 + CHEM 325)
    "Prob/Stat": boolean, //MATH 205 or MATH 350
    "data": boolean, //CISC 483 OR CISC 484

    "6Restrict": boolean, //6 from list called restrict, or CISC course at 300 level or above
    
    "124": boolean          //124 Credits needed to graduate
}*/ //Old interface, kept to see reqs

export function updateCSBio(semesters: Semester[]): requirementList {
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

    let extra9 = false;

    let c108 = false;
    let c181 = false;
    let c210 = false;
    let c220 = false;
    let c260 = false;
    let c275 = false;
    let c303 = false;
    let c320 = false;
    let m210 = false;
    let m241 = false;

    let majCaps = false;
    let writing = false;
    let c355 = false;

    let b207 = false;
    let b208 = false;
    let b401 = false;
    let ch103 = false;
    let ch133 = false;
    let ch104 = false;
    let ch134 = false;
    let c372 = false;
    let c436 = false;
    let m242 = false;
    let m349 = false;

    let orgo = false;
    let stats = false;
    let data = false;

    let extra6 = false;
    
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
    if(courseNames.includes("CISC 303")){
        c303 = true;
        courseNames = courseNames.filter(key => key != "CISC 303");
    }
    if(courseNames.includes("CISC 320")){
        c320 = true;
        courseNames = courseNames.filter(key => key != "CISC 320");
    }
    if(courseNames.includes("MATH 210")){
        m210 = true;
        courseNames = courseNames.filter(key => key != "MATH 210");
    }
    if(courseNames.includes("MATH 241")){
        m241 = true;
        courseNames = courseNames.filter(key => key != "MATH 241");
    }

    //capstone
    if(courseNames.includes("CISC 498") && courseNames.includes("CISC 499")){
        caps = true;
        majCaps = true;
        courseNames = courseNames.filter(key => key != "CISC 498");
        courseNames = courseNames.filter(key => key != "CISC 499");
    } else if(courseNames.includes("UNIV 401") && courseNames.includes("UNIV 402")){
        caps = true;
        majCaps = true;
        courseNames = courseNames.filter(key => key != "UNIV 401");
        courseNames = courseNames.filter(key => key != "UNIV 402");
    }

    //check specific courses
    if(courseNames.includes("CISC 355")){
        c355 = true;
    }
    if(courseNames.includes("ENGL 312")){
        writing = true;
    } else if(courseNames.includes("ENGL 410")){
        writing = true;
    }

    //check specific courses
    if(courseNames.includes("BISC 207")){
        b207 = true;
        courseNames = courseNames.filter(key => key != "BISC 207");
    }
    if(courseNames.includes("BISC 208")){
        b208 = true;
        courseNames = courseNames.filter(key => key != "BISC 208");
    }
    if(courseNames.includes("BISC 401")){
        b401 = true;
        courseNames = courseNames.filter(key => key != "BISC 401");
    }
    if(courseNames.includes("CHEM 103")){
        ch103 = true;
        courseNames = courseNames.filter(key => key != "CHEM 103");
    }
    if(courseNames.includes("CHEM 133")){
        ch133 = true;
        courseNames = courseNames.filter(key => key != "CHEM 133");
    } 
    if(courseNames.includes("CHEM 104")){
        ch104 = true;
        courseNames = courseNames.filter(key => key != "CHEM 104");
    }
    if(courseNames.includes("CHEM 134")){
        ch134 = true;
        courseNames = courseNames.filter(key => key != "CHEM 134");
    } 
    if(courseNames.includes("CISC 372")){
        c372 = true;
        courseNames = courseNames.filter(key => key != "CISC 372");
    }
    if(courseNames.includes("CISC 436")){
        c436 = true;
        courseNames = courseNames.filter(key => key != "CISC 436");
    } 
    if(courseNames.includes("MATH 242")){
        m242 = true;
        courseNames = courseNames.filter(key => key != "MATH 242");
    }
    if(courseNames.includes("MATH 349")){
        m349 = true;
        courseNames = courseNames.filter(key => key != "MATH 349");
    } 

    //stat
    if(courseNames.includes("MATH 205")){
        stats = true;
        courseNames = courseNames.filter(key => key != "MATH 205");
    } else if(courseNames.includes("MATH 350")){
        stats = true;
        courseNames = courseNames.filter(key => key != "MATH 350");
    }

    //chem reqs
    if(courseNames.includes("CHEM 213") && courseNames.includes("CHEM 215")){
        orgo = true;
        courseNames = courseNames.filter(key => key != "CHEM 213");
        courseNames = courseNames.filter(key => key != "CHEM 215");
    } else if(courseNames.includes("CHEM 321") && courseNames.includes("CHEM 325")){
        orgo = true;
        courseNames = courseNames.filter(key => key != "CHEM 321");
        courseNames = courseNames.filter(key => key != "CHEM 325");
    }

    //data req
    const dat = findCommonCourses(courseNames, ["CISC 483", "CISC 484"]);
    if(dat.length > 0){
        data = true;
        courseNames = courseNames.filter(key => key != dat[0]);
    }

    //extra courses
    const e6 = findCommonCourses(courseNames, restrict);
    if(e6.length >= 2){
        extra6 = true;
        courseNames = courseNames.filter(key => key != e6[0]);
        courseNames = courseNames.filter(key => key != e6[1]);
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
    const cultural = findCommonCourses(courseNames, multiCult);
    if(cultural.length > 0){
        multi = true;
    }
    const a = findCommonCourses(courseNames, groupA);
    if(a.length >= 1){
        groupa = true;
        courseNames = courseNames.filter(key => key != a[0]); 
    }
    const b = findCommonCourses(courseNames, groupB);
    if(b.length >= 1){
        groupb = true;
        courseNames = courseNames.filter(key => key != b[0]); 
    }
    const c = findCommonCourses(courseNames, groupC);
    if(c.length >= 1){
        groupc = true;
        courseNames = courseNames.filter(key => key != c[0]); 
    }
    const d = findCommonCourses(courseNames, groupD);
    if(d.length >= 1){
        groupd = true;
        courseNames = courseNames.filter(key => key != d[0]); 
    }
    const extraBreadth = findCommonCourses(courseNames, groupA.concat(groupB).concat(groupC).concat(engineerBreadth).concat(engineerProfess));
    if(extraBreadth.length >= 3){
        extra9 = true;
    }

    return {"requirements":
        [
            {"requirement": "ENGL 110", "satisfied":e110},  
            {"requirement": "FYS", "satisfied": fys},       
            {"requirement":"DLE",  "satisfied":dles},       
            {"requirement":"Multi", "satisfied":multi},     
            {"requirement":"groupA", "satisfied":groupa},    
            {"requirement":"groupB", "satisfied":groupb},    
            {"requirement":"groupC", "satisfied":groupc},    
            {"requirement":"groupD", "satisfied":groupd},    
            {"requirement":"capstone", "satisfied":caps},
            {"requirement": "9 extra", "satisfied":extra9},
            {"requirement": "108", "satisfied":c108},
            {"requirement":"181", "satisfied":c181},
            {"requirement":"210", "satisfied":c210},
            {"requirement":"220", "satisfied":c220},
            {"requirement":"260", "satisfied":c260},
            {"requirement":"275", "satisfied":c275},
            {"requirement":"303", "satisfied":c303},
            {"requirement":"320", "satisfied":c320},
            {"requirement":"MATH 210", "satisfied":m210},
            {"requirement":"MATH 241", "satisfied":m241},
            {"requirement":"caps", "satisfied":majCaps},
            {"requirement":"writing", "satisfied":writing},
            {"requirement":"355", "satisfied":c355},
            {"requirement":"BISC 207", "satisfied":b207},
            {"requirement":"BISC 208", "satisfied":b208},
            {"requirement":"BISC 401", "satisfied":b401},
            {"requirement":"CHEM 103", "satisfied":ch103},
            {"requirement":"CHEM 133", "satisfied":ch133},
            {"requirement":"CHEM 104", "satisfied":ch104},
            {"requirement":"CHEM 134", "satisfied":ch134},
            {"requirement":"372", "satisfied":c372},
            {"requirement":"436", "satisfied":c436},
            {"requirement":"MATH 242", "satisfied":m242},
            {"requirement":"MATH 349", "satisfied":m349},
            {"requirement":"orgo", "satisfied":orgo}, 
            {"requirement":"Prob/Stat", "satisfied":stats},
            {"requirement":"data", "satisfied":data}, 
            {"requirement":"6Restrict", "satisfied":extra6}, 
            {"requirement":"124", "satisfied":total124} 
        ]          
    };
}