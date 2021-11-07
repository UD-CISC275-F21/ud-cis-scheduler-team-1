import { univReqs, noTech } from "./univReqs";

export interface CSBA {
    "univ": univReqs,
    //Course work for the four groups cannot be all of same prefix
    "aExtra": boolean, //same as Group A for univ, cannot overlap 6 cr
    "bExtra": boolean, //cannot overlap 6 cr
    "cExtra": boolean, //cannot overlap 6 cr
    "dExtra": boolean, //cannot overlap 7 cr, 4 must be natural scince with lab
    "lang": boolean, //completion of 107, 112, or 202 level language course
    "secondWrite": boolean, //Second writing requirement, approved by Col A&S
    "no45": boolean, //Cannot have more than 45 credits with same prefix
    // For the following, if there is no prefix, it means CISC
    "108": boolean,
    "181": boolean,
    "210": boolean,
    "220": boolean,
    "260": boolean,
    "275": boolean,
    "fiteenAt301": boolean, //Must be tech electives, excludes noTech Courses
    "MATH 210": boolean,
    "MATH 241": boolean,
    "124": boolean          //124 Credits needed to graduate
}