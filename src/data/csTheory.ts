import { Semester } from "../interfaces/semester";
import { univReqs, noTech, accumulateCourses, findCommonCourses, dle, engineerBreadth, engineerProfess, firstYearExp, groupA, groupB, groupC, groupD, multiCult } from "./univReqs";

const restrict = ["CISC 372", "CISC 404", "CISC 410", "CISC 414", "CISC 471", "CISC 481", "ELEG 387", "ELEG 487", "MATH 243", "MATH 245", 
    "MATH 302", "MATH 315", "MATH 350", "MATH 428", "MATH 450", "MATH 451"];

export interface CSTheory {
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
    "401": boolean,
    "MATH 242": boolean,
    "MATH 349": boolean,
    "Prob/Stat": boolean, //MATH 205 or MATH 350

    "discreteTrack": discrete,
    "contTrack": continuous, 
    "track": boolean, //true if one of discrete or continuous is complete
    "6Restrict": boolean, //6 from list called restrict
    "cisc3-4Elect": boolean, //3-4 credits of CISC AT 300 level or higher
    
    "124": boolean          //124 Credits needed to graduate
}

interface discrete{
    "complete": boolean, //true if all sub categories in this are true
    "404": boolean,
    "MATH 245": boolean,
    "MATH 315": boolean,
    "MATH 451": boolean,
}

interface continuous{
    "complete": boolean, //true if all sub categories in this are true
    "MATH 243": boolean,
    "MATH 302": boolean,
    "MATH 535": boolean,
    "MATH 426": boolean
}

export function updateCSTheory(semesters: Semester[]): CSTheory {
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
    let c401 = false;
    let m242 = false;
    let m349 = false;
    let stats = false;

    let extra6 = false;
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
    if(courseNames.includes("CISC 401")){
        c401 = true;
        courseNames = courseNames.filter(key => key != "CISC 442");
    }
    if(courseNames.includes("MATH 242")){
        m242 = true;
        courseNames = courseNames.filter(key => key != "MATH 242");
    }
    if(courseNames.includes("MATH 349")){
        m349 = true;
        courseNames = courseNames.filter(key => key != "MATH 349");
    }  

    if(courseNames.includes("MATH 205")){
        stats = true;
        courseNames = courseNames.filter(key => key != "MATH 205");
    } else if(courseNames.includes("MATH 350")){
        stats = true;
        courseNames = courseNames.filter(key => key != "MATH 350");
    }

    let c404 = false;
    let m245 = false;
    let m315 = false;
    let m451 = false;
    let m243 = false;
    let m302 = false;
    let m535 = false;
    let m426 = false;

    if(courseNames.includes("CISC 404")){
        c404 = true;
    }
    if(courseNames.includes("MATH 245")){
        m245 = true;
    }
    if(courseNames.includes("MATH 315")){
        m315 = true;
    } 
    if(courseNames.includes("MATH 451")){
        m451 = true;
    }
    if(courseNames.includes("MATH 243")){
        m243 = true;
    }  
    if(courseNames.includes("MATH 302")){
        m302 = true;
    } 
    if(courseNames.includes("MATH 535")){
        m535 = true;
    }
    if(courseNames.includes("MATH 426")){
        m426 = true;
    } 
    
    const disComp = c404 && m245 && m315 && m451;
    const conComp = m243 && m302 && m535 && m426;

    const discrete = {
        "complete": disComp, //true if all sub categories in this are true
        "404": c404,
        "MATH 245": m245,
        "MATH 315": m315,
        "MATH 451": m451,
    };
    
    const continuous = {
        "complete": conComp, //true if all sub categories in this are true
        "MATH 243": m243,
        "MATH 302": m302,
        "MATH 535": m535,
        "MATH 426": m426
    };

    const track = disComp && conComp;

    const e6 = findCommonCourses(courseNames, restrict);
    if(e6.length >= 2){
        extra6 = true;
        courseNames = courseNames.filter(key => key != e6[0]);
        courseNames = courseNames.filter(key => key != e6[1]);
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
        "401": c401,
        "MATH 242": m242,
        "MATH 349": m349,
        "Prob/Stat": stats,

        "discreteTrack": discrete,
        "contTrack": continuous, 
        "track": track,
        "6Restrict": extra6,
        "cisc3-4Elect": extra34, 
        
        "124": total124       
    };
}