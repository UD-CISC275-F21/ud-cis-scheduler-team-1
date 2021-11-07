import { univReqs, noTech } from "./univReqs";

export interface CSBS {
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
}