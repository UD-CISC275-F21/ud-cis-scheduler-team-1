import { Semester } from "../interfaces/semester";
import { univReqs, noTech, accumulateCourses, findCommonCourses, dle, engineerBreadth, engineerProfess, firstYearExp, groupA, groupB, groupC, groupD, multiCult } from "./univReqs";

export interface CSHighPerf {
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
    
    "360": boolean,
    "361": boolean,
    "372": boolean,
    "450": boolean,
    "471": boolean,
    "MATH 242": boolean,
    "MATH 243": boolean,
    "apMathTrack": apMath,
    "dataTrack": data, 
    "track": boolean, //true if one of apMathTrack or Data Track is complete

    "124": boolean          //124 Credits needed to graduate
}

interface apMath{
    "complete": boolean, //true if all sub categories in this are true
    "MATH 351": boolean,
    "MATH 428": boolean,
    "Prob/Stat": boolean, //MATH 205 or MATH 350
    "elec": boolean // 5 credits from CISC 300 level +, MATH 205, MATH 350
}

interface data{
    "complete": boolean, //true if all sub categories in this are true
    "437": boolean,
    "MATH 350": boolean,
    "MATH 450": boolean,
    "ml": boolean, //CISC 483 OR CISC 484
    "elec": boolean // 5 credits from CISC 300 level +, MATH 302, MATH 349, MATH 351, MATH 535
}

export function updateCSHighPerf(semesters: Semester[]): CSHighPerf {
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

    let c360 = false;
    let c361 = false;
    let c372 = false;
    let c450 = false;
    let c471 = false;
    let m242 = false;
    let m243 = false;

    //apMath
    let apComp = false;
    let m351 = false;
    let m428 = false;
    let stats = false;
    let apElec = false;

    //Data
    let datComp = false;
    let c437 = false;
    let m350 = false;
    let m450 = false;
    let ml = false;
    let datElec = false;

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

    if(courseNames.includes("CISC 360")){
        c360 = true;
        courseNames = courseNames.filter(key => key != "CISC 360");
    }
    if(courseNames.includes("CISC 361")){
        c361 = true;
        courseNames = courseNames.filter(key => key != "CISC 361");
    }
    if(courseNames.includes("CISC 372")){
        c372 = true;
        courseNames = courseNames.filter(key => key != "CISC 372");
    }
    if(courseNames.includes("CISC 450")){
        c450 = true;
        courseNames = courseNames.filter(key => key != "CISC 450");
    }
    if(courseNames.includes("CISC 471")){
        c471 = true;
        courseNames = courseNames.filter(key => key != "CISC 471");
    } 
    if(courseNames.includes("MATH 242")){
        m242 = true;
        courseNames = courseNames.filter(key => key != "MATH 242");
    }
    if(courseNames.includes("MATH 243")){
        m243 = true;
        courseNames = courseNames.filter(key => key != "MATH 243");
    }  

    if(courseNames.includes("MATH 205")){
        stats = true;
        courseNames = courseNames.filter(key => key != "MATH 205");
    } else if(courseNames.includes("MATH 350")){
        stats = true;
        courseNames = courseNames.filter(key => key != "MATH 350");
    }
    if(courseNames.includes("MATH 351")){
        m351 = true;
    }
    if(courseNames.includes("MATH 428")){
        m428 = true;
    }
    if(courseNames.includes("CISC 437")){
        c437 = true;
    }
    if(courseNames.includes("MATH 350")){
        m350 = true;
    }
    if(courseNames.includes("MATH 450")){
        m450 = true;
    }
    if(courseNames.includes("MATH 450")){
        m450 = true;
    }
    if(courseNames.includes("CISC 483") || courseNames.includes("CISC 484")){
        ml = true;
    }

    let total = 0;
    for(let i = 0; i < courseNames.length; i++){
        if(courseNames[i].substr(0, 4) === "CISC" && (+courseNames[i][4] >= 3) && !noTech.includes(courseNames[i])){
            total = total + 3;
            break;
        }
    }
    if(total >= 5){
        apElec = true;
        datElec = true;
    }

    apComp = m351 && m428 && stats && apElec;
    datComp = c437 && m350 && m450 && ml && datElec;

    const track = apComp && datComp;

    const apMath = {
        "complete": apComp,
        "MATH 351": m351,
        "MATH 428": m428,
        "Prob/Stat": stats,
        "elec": apElec 
    };
    
    const data = {
        "complete": datComp, 
        "437": c437,
        "MATH 350": m350,
        "MATH 450": m450,
        "ml": ml,
        "elec": datElec
    };
    
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
        
        "360": c360,
        "361": c361,
        "372": c372,
        "450": c450,
        "471": c471,
        "MATH 242": m242,
        "MATH 243": m243,
        "apMathTrack": apMath,
        "dataTrack": data, 
        "track": track, //true if one of apMathTrack or Data Track is complete

        "124": total124      
    };
}