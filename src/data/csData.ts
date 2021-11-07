import { univReqs, noTech } from "./univReqs";

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