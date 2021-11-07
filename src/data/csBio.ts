import { univReqs, noTech } from "./univReqs";

const restrict = ["ANFS 300", "ANFS 310", "ANFS 470", "BISC 403", "BISC 484", "BISC 492", "CHEM 214", "CHEM 216", "CHEM 322", 
    "CHEM 326", "MATH 243"];

export interface CSBio {
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
}