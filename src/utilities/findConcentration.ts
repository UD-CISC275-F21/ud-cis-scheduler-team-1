import { updateCSAIRobots } from "../data/csAIRobots";
import { updateCSBio } from "../data/csBio";
import { updateCSBS } from "../data/csBS";
import { updateCSCyber } from "../data/csCyber";
import { updateCSData } from "../data/csData";
import { updateCSHighPerf } from "../data/csHighPerf";
import { updateCSSystems } from "../data/csSystems";
import { updateCSTheory } from "../data/csTheory";
import { requirementList } from "../data/univReqs";
import { Semester } from "../interfaces/semester";


export type updateFunction = (s: Semester[]) => requirementList

//mapping concentration name to corresponding update function
export const dispatch : Record<string, updateFunction> = {
    "Traditional Program": updateCSBS,
    "Artificial Intelligence and Robotics": updateCSAIRobots,
    "Bioinformatics": updateCSBio,
    "Cybersecurity": updateCSCyber,
    "Data Science": updateCSData,
    "High Performance Computing": updateCSHighPerf,
    "Systems and Networks": updateCSSystems,
    "Theory and Computation": updateCSTheory,
};

//find concentration function
export function findConcentration(conc: string,semesters: Semester[]): requirementList {
    return dispatch[conc](semesters);
}
