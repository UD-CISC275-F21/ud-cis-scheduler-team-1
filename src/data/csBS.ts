import { Semester } from "../interfaces/semester";
import { findCourse } from "../utilities/findCourse";
import {noTech, accumulateCourses, dle, firstYearExp, multiCult, groupA, groupB, groupC, groupD, findCommonCourses, engineerBreadth, engineerProfess, requirementList } from "./univReqs";

/*export interface CSBS {
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
    "361": boolean,
    "372": boolean,
    "6Extra301": boolean, //6 credits, exclude noTech list, must be at 301 or above
    "12Extra": boolean, //12 credits, exclude noTech list, cannot overlap other electives
    "Prob/Stat": boolean, //MATH 205 or MATH 350
    "MATH 210": boolean,
    "MATH 241": boolean,
    "MATH 242": boolean,
    "caps": boolean, //(CISC 498 + CISC 499) OR (UNIV 401 + UNIV 402)
    "science": boolean,
    //OP 1: PHYS 207, PHYS 227, PHYS 208, PHYS 208, PHYS 228
    //OP2: CHEM 103, CHEM 133, CHEM 104, CHEM 134
    //OP 3: BISC 207, BISC 208
    //OP 4: GEOL 105, GEOL 107, GEOL 115
    //OP5: GEOL 107, GEOL 110

    "math300": boolean, //usually CISC 304 OR MATH 349, or another 300 math course approved
    "writing": boolean, //ENGL 312 OR ENGL 410
    "355": boolean, //ETHICS
    // ENGL 312, ENGL 410 AND CISC 355 count for Engineer Breadth
    
    "124": boolean          //124 Credits needed to graduate
}*/ //Old interface, kept for purposes of seeing reqs

export function updateCSBS(semesters: Semester[]): requirementList {
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
    let c361 = false;
    let c372 = false;
    let m210 = false;
    let m241 = false;
    let m242 = false;
    let sixat300 = false;
    let extra12 = false;
    let stats = false;
    let majCaps = false;
    let science = false;
    let m300 = false;
    let writing = false;
    let c355 = false;
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
    if(courseNames.includes("CISC 303")){
        c303 = true;
        courseNames = courseNames.filter(key => key != "CISC 303");
    }
    if(courseNames.includes("CISC 320")){
        c320 = true;
        courseNames = courseNames.filter(key => key != "CISC 320");
    }
    if(courseNames.includes("CISC 361")){
        c361 = true;
        courseNames = courseNames.filter(key => key != "CISC 361");
    }
    if(courseNames.includes("CISC 372")){
        c372 = true;
        courseNames = courseNames.filter(key => key != "CISC 372");
    }
    if(courseNames.includes("MATH 242")){
        m242 = true;
        courseNames = courseNames.filter(key => key != "MATH 242");
    }
    if(courseNames.includes("CISC 355")){
        c355 = true;
    }
    //math req
    if(courseNames.includes("CISC 304")){
        m300 = true;
        courseNames = courseNames.filter(key => key != "CISC 304");
    } else if(courseNames.includes("MATH 349")){
        m300 = true;
        courseNames = courseNames.filter(key => key != "MATH 349");
    }
    //stats
    if(courseNames.includes("MATH 205")){
        stats = true;
        courseNames = courseNames.filter(key => key != "MATH 205");
    } else if(courseNames.includes("MATH 350")){
        stats = true;
        courseNames = courseNames.filter(key => key != "MATH 350");
    }
    //writing req
    if(courseNames.includes("ENGL 312")){
        writing = true;
    } else if(courseNames.includes("ENGL 410")){
        writing = true;
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
    //lab science
    if(courseNames.includes("PHYS 207") && courseNames.includes("PHYS 227") && courseNames.includes("PHYS 208") && courseNames.includes("PHYS 228")){
        science = true;
        courseNames = courseNames.filter(key => key != "PHYS 207");
        courseNames = courseNames.filter(key => key != "PHYS 227");
        courseNames = courseNames.filter(key => key != "PHYS 208");
        courseNames = courseNames.filter(key => key != "PHYS 228");
    } else if(courseNames.includes("CHEM 103") && courseNames.includes("CHEM 133") && courseNames.includes("CHEM 104") && courseNames.includes("CHEM 134")){
        science = true;
        courseNames = courseNames.filter(key => key != "CHEM 103");
        courseNames = courseNames.filter(key => key != "CHEM 133");
        courseNames = courseNames.filter(key => key != "CHEM 104");
        courseNames = courseNames.filter(key => key != "CHEM 134");
    }else if(courseNames.includes("BISC 207") && courseNames.includes("BISC 208")){
        science = true;
        courseNames = courseNames.filter(key => key != "BISC 207");
        courseNames = courseNames.filter(key => key != "BISC 208");
    } else if(courseNames.includes("GEOL 105") && courseNames.includes("GEOL 107") && courseNames.includes("GEOL 115")){
        science = true;
        courseNames = courseNames.filter(key => key != "GEOL 105");
        courseNames = courseNames.filter(key => key != "GEOL 107");
        courseNames = courseNames.filter(key => key != "GEOL 115");
    } else if(courseNames.includes("GEOL 107") && courseNames.includes("GEOL 110")){
        science = true;
        courseNames = courseNames.filter(key => key != "GEOL 107");
        courseNames = courseNames.filter(key => key != "GEOL 110");
    }
    //extra 6 credits
    let six = 0;
    for(let i = 0; i < courseNames.length; i++){
        if(courseNames[i].substr(0, 4) === "CISC" && (+courseNames[i][4] >= 3) && !noTech.includes(courseNames[i])){
            six = six + +findCourse(courseNames[i]).credits;
            courseNames = courseNames.filter(key => key != courseNames[i]); 
            i = i - 1;
        }
        if(six >= 6){
            sixat300 = true;
            break;
        }
    }
    //extra 12 credits
    let twelve = 0;
    for(let i = 0; i < courseNames.length; i++){
        if(courseNames[i].substr(0, 4) === "CISC" && (+courseNames[i][4] >= 3) && !noTech.includes(courseNames[i])){
            twelve = twelve + +findCourse(courseNames[i]).credits;
            courseNames = courseNames.filter(key => key != courseNames[i]); 
            i = i - 1;
        }
        if(six >= 6){
            extra12 = true;
            break;
        }
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
            {"requirement":"361", "satisfied":c361},
            {"requirement":"372", "satisfied":c372},
            {"requirement":"6Extra301", "satisfied": sixat300}, 
            {"requirement":"12Extra", "satisfied": extra12},
            {"requirement":"Prob/Stat", "satisfied":stats}, 
            {"requirement":"MATH 210", "satisfied":m210},
            {"requirement":"MATH 241", "satisfied":m241},
            {"requirement":"MATH 242", "satisfied":m242},
            {"requirement":"caps", "satisfied":majCaps},
            {"requirement":"science", "satisfied":science},
        
            {"requirement": "math300", "satisfied": m300}, //usually CISC 304 OR MATH 349, or another 300 math course approved
            {"requirement":"writing", "satisfied":writing}, //ENGL 312 OR ENGL 410
            {"requirement":"355", "satisfied":c355}, //ETHICS
            // ENGL 312, ENGL 410 AND CISC 355 count for Engineer Breadth
            
            {"requirement":"124", "satisfied":total124}         //124 Credits needed to graduate

        ]
        
    };
}

