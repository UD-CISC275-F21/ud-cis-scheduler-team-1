import { univReqs, noTech } from "./univReqs";

const restrict = ["MATH 242", "MATH 349", "MATH 549", "CISC 304", "CISC 436", "CISC 437", "CISC 440", "CISC 442", "CISC 449", 
    "CISC 453", "CISC 459", "CISC 481", "CISC 483", "CISC 484", "CISC 474", "CPEG 470", "CPEG 471", "CPEG 472", "CPEG 473", 
    "CPEG 475", "CPEG 476", "CPEG 494", "CPEG 495", "ELEG 387", "ELEG 487"];

export interface CSCyber {
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
    
    "361": boolean,
    "372": boolean,
    "450": boolean,
    "464": boolean,
    "CPEG 465": boolean,
    "CPEG 494": boolean,
    "Prob/Stat": boolean, //MATH 205 or MATH 350
    "advanced": boolean //Two of CPEG 472, CPEG 473, CPEG 475, CPEG 476, CPEG 495
    "6Restrict": boolean, //6 from list called restrict
    "cisc3-4Elect": boolean, //3-4 credits of CISC AT 300 level or higher
    "124": boolean          //124 Credits needed to graduate
}