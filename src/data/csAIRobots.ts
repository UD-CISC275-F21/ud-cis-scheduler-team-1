import { univReqs, noTech } from "./univReqs";

const restrict = ["CISC 436", "CISC 437", "CISC 489", "CISC 889", "EDUC 462", "ELEG 404", "ELEG 418", "ELEG 387", "ELEG 487", 
    "LING 202", "LING 404", "LING 418", "LING 444", "LING 451", "LING 455", "MAST 632", "MATH 242", "MATH 349", "MEEG 671", 
    "PSYC 310", "PSYC 340", "PSYC 344"];

export interface CSAIRobots {
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
    "442": boolean,
    "481": boolean,
    "483": boolean,
    "484": boolean,
    "Prob/Stat": boolean, //MATH 205 or MATH 350
    "systems": boolean //CISC 361 or CISC 372
    "12Restrict": boolean, //12 from list called restrict
    "cisc3-4Elect": boolean, //3-4 credits of CISC AT 300 level or higher
    "124": boolean          //124 Credits needed to graduate
}