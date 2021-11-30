import { CSAIRobots, updateCSAIRobots } from "../data/csAIRobots";
import { CSBio, updateCSBio } from "../data/csBio";
import { CSBS, updateCSBS } from "../data/csBS";
import { CSCyber, updateCSCyber } from "../data/csCyber";
import { CSData, updateCSData } from "../data/csData";
import { CSHighPerf, updateCSHighPerf } from "../data/csHighPerf";
import { CSSystems, updateCSSystems } from "../data/csSystems";
import { CSTheory, updateCSTheory } from "../data/csTheory";
import { Semester } from "../interfaces/semester";

export type Concentrations = | CSBS
    | CSAIRobots
    | CSBio
    | CSCyber
    | CSData
    | CSHighPerf
    | CSSystems
    | CSTheory

export type updateFunction = (s: Semester[]) => Concentrations

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
export function findConcentration(conc: string,semesters: Semester[]): Concentrations {
    return dispatch[conc](semesters);
}
