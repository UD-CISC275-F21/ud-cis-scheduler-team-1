import { univReqs, noTech } from "./univReqs";

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
    "MATH 451": boolean, //MATH 205 OR MATH 350
}

interface continuous{
    "complete": boolean, //true if all sub categories in this are true
    "MATH 243": boolean,
    "MATH 302": boolean,
    "MATH 535": boolean,
    "MATH 426": boolean
}