import { Semester } from "../interfaces/semester";
import { univReqs, noTech, accumulateCourses, findCommonCourses, dle, engineerBreadth, engineerProfess, firstYearExp, groupA, groupB, groupC, groupD, multiCult } from "./univReqs";

const restrict = ["CISC 361", "CISC 410", "CISC 436", "CISC 440", "CISC 442", "CISC 449", "CISC 450", "CISC 471", "CISC 474", 
    "CISC 483", "CISC 484", "CISC 489", "ELEG 387", "ELEG 487", "MATH 302", "MATH 350", "MATH 428", "MATH 450"];

export interface CSData {
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
    "science": boolean,
    //OP 1: PHYS 207, PHYS 227, PHYS 208, PHYS 208, PHYS 228
    //OP2: CHEM 103, CHEM 133, CHEM 104, CHEM 134
    //OP 3: BISC 207, BISC 208
    //OP 4: GEOL 105, GEOL 107, GEOL 115
    //OP5: GEOL 107, GEOL 110
    "writing": boolean, //ENGL 312 OR ENGL 410
    "355": boolean, //ETHICS
    // ENGL 312, ENGL 410 AND CISC 355 count for Engineer Breadth
    
    "304": boolean,
    "372": boolean,
    "437": boolean,
    "481": boolean,
    "MATH 205": boolean,
    "MATH 242": boolean,
    "MATH 243": boolean,
    "MATH 349": boolean,

    "advDS": boolean //CISC 483 or CISC 484
    "advMath": boolean, //MATH 302 or MATH 350 or MATH 426
    "3Restrict": boolean, //3 from list called restrict
    "cisc3-4Elect": boolean, //3-4 credits of CISC AT 300 level or higher
    "124": boolean          //124 Credits needed to graduate
}

export function updateCSData(semesters: Semester[]): CSData {
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
    let science = false;
    let writing = false;
    let c355 = false;

    let c304 = false;
    let c372 = false;
    let c437 = false;
    let c481 = false;
    let m205 = false;
    let m242 = false;
    let m243 = false;
    let m349 = false;

    let advDS = false;
    let advMath = false;
    
    let extra3 = false;
    let extra34 = false;
    
    let total124 = false;

    if(totalCreds >= 124){
        total124 = true;
    }
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

    if(courseNames.includes("CISC 355")){
        c355 = true;
    }
    if(courseNames.includes("ENGL 312")){
        writing = true;
    } else if(courseNames.includes("ENGL 410")){
        writing = true;
    }

    if(courseNames.includes("CISC 304")){
        c304 = true;
        courseNames = courseNames.filter(key => key != "CISC 304");
    }
    if(courseNames.includes("CISC 372")){
        c372 = true;
        courseNames = courseNames.filter(key => key != "CISC 372");
    }
    if(courseNames.includes("CISC 437")){
        c437 = true;
        courseNames = courseNames.filter(key => key != "CISC 437");
    }
    if(courseNames.includes("CISC 481")){
        c481 = true;
        courseNames = courseNames.filter(key => key != "CISC 481");
    }
    if(courseNames.includes("MATH 205")){
        m205 = true;
        courseNames = courseNames.filter(key => key != "MATH 205");
    }
    if(courseNames.includes("MATH 242")){
        m242 = true;
        courseNames = courseNames.filter(key => key != "MATH 242");
    }  
    if(courseNames.includes("MATH 243")){
        m243 = true;
        courseNames = courseNames.filter(key => key != "MATH 243");
    }
    if(courseNames.includes("MATH 349")){
        m349 = true;
        courseNames = courseNames.filter(key => key != "MATH 349");
    }

    const ds = findCommonCourses(courseNames, ["CISC 483", "CISC 484"]);
    if(ds.length > 0){
        advDS = true;
        courseNames = courseNames.filter(key => key != ds[0]);
    }

    const math = findCommonCourses(courseNames, ["MATH 302", "MATH 350", "MATH 426"]);
    if(math.length > 0){
        advMath = true;
        courseNames = courseNames.filter(key => key != math[0]);
    }

    const e3 = findCommonCourses(courseNames, restrict);
    if(e3.length >= 1){
        extra3 = true;
        courseNames = courseNames.filter(key => key != e3[0]);
    }
    for(let i = 0; i < courseNames.length; i++){
        if(courseNames[i].substr(0, 4) === "CISC" && (+courseNames[i][4] >= 3) && !noTech.includes(courseNames[i])){
            extra34 = true;
            courseNames = courseNames.filter(key => key != courseNames[i]);
            break;
        }
    }
    
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

    return {
        "univ": univ,
        "9 extra": extra9,

        "108": c108,
        "181": c181,
        "210": c210,
        "220": c220,
        "260": c260,
        "275": c275,
        "303": c303,
        "320": c320,
        "MATH 210": m210,
        "MATH 241": m241,
        "caps": majCaps, 
        "science": science,

        "writing": writing,
        "355": c355, 
        
        
        "304": c304,
        "372": c372,
        "437": c437,
        "481": c481,
        "MATH 205": m205,
        "MATH 242": m242,
        "MATH 243": m243,
        "MATH 349": m349,

        "advDS": advDS,
        "advMath": advMath, 
        "3Restrict": extra3, 
        "cisc3-4Elect": extra34, 
        "124": total124               
    };
}