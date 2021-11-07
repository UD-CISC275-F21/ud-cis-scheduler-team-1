import { univReqs, noTech } from "./univReqs";

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
    "stats/prob": boolean, //MATH 205 OR MATH 350
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