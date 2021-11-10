import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import "../App.css";
import { CSAIRobots, updateCSAIRobots } from "../data/csAIRobots";
import { CSBA, updateCSBA } from "../data/csBA";
import { CSBio, updateCSBio } from "../data/csBio";
import { CSCyber, updateCSCyber } from "../data/csCyber";
import { CSData, updateCSData } from "../data/csData";
import { CSHighPerf, updateCSHighPerf } from "../data/csHighPerf";
import { CSSystems, updateCSSystems } from "../data/csSystems";
import { CSTheory, updateCSTheory } from "../data/csTheory";
import { CSMinor, CSMinorUpdate } from "../data/minor";
import { Semester } from "../interfaces/semester";
import { ReqCourseText } from "./ReqCourseText";

interface iReq {
    semesters: Semester[];
    bsba: string;
    major: string;
    conc: string;
}
//Planning to use this to check for ### => return CISC ###
//function isNum(val: string) {
//   return !isNaN(+val);
//}

export function Requirements({ semesters, bsba, major, conc }: iReq): JSX.Element {
    const [remainingCourses,setRemainingCourses] = useState<string[]>([]);
    const [fulfilledCourses, setFulfilledCourses] = useState<string[]>([]);
    //const remainCourses : string[] = [];
    function getConc() {
        if (major === "Minor") {
            const req: CSMinor = CSMinorUpdate(semesters);
            return req;
        } else {
            if (bsba === "BA") {
                const req: CSBA = updateCSBA(semesters);
                return req;
            } else {
                switch (conc) {
                case "Traditional Program":
                {
                    const req: CSBA = updateCSBA(semesters);
                    return req;
                }
                case "Artificial Intelligence and Robotics":
                {
                    const req: CSAIRobots = updateCSAIRobots(semesters);
                    return req;
                }
                case "Bioinformatics":
                {
                    const req: CSBio = updateCSBio(semesters);
                    return req;
                }
                case "Cybersecurity":
                {
                    const req: CSCyber = updateCSCyber(semesters);
                    return req;
                }
                case "Data Science":
                {
                    const req: CSData = updateCSData(semesters);
                    return req;
                }
                case "High Performance Computing":
                {
                    const req: CSHighPerf = updateCSHighPerf(semesters);
                    return req;
                }
                case "Systems and Networks":
                {
                    const req: CSSystems = updateCSSystems(semesters);
                    return req;
                }
                case "Theory and Computation":
                {
                    const req: CSTheory = updateCSTheory(semesters);
                    return req;
                }
                default : 
                {
                    const req: CSBA = updateCSBA(semesters);
                    return req;
                }
                }
            }
        }
    }
    useEffect(() => {
        const newRemCourses : string[] = [];
        const newFulCourses : string[] = [];
        const requirements = Object.entries(getConc());

        // Loops through all elements in the updated degree plan to split all
        // requirements into a fulfilled list and a remaining list
        for (const [key, value] of requirements) {
            if (key === "univ") {
                for (const [univKey, univValue] of Object.entries(value)) { 
                    univValue && newFulCourses.push(univKey);
                    !univValue && newRemCourses.push(univKey);
                }
            } else if (["apMathTrack", "dataTrack", "discreteTrack", "contTrack"].includes(key)) {
                let trackComplete = false;
                let trackCount = 0;
                for (const [univKey, univValue] of Object.entries(value)) { 
                    if (univKey === "complete") {
                        trackComplete = trackComplete || univValue as boolean;
                        trackCount++;
                    } else {
                        univValue ? newFulCourses.push(univKey) : newRemCourses.push(univKey);
                    }
                }
                trackCount == 2 && trackComplete && newFulCourses.push("complete");
                trackCount == 2 && !trackComplete && newRemCourses.push("complete");
            } else {
                if (value) {
                    newFulCourses.push(key);
                } else {
                    newRemCourses.push(key);
                }
            }
        }
        setFulfilledCourses(newFulCourses);
        setRemainingCourses(newRemCourses);

    }, [semesters,bsba,major,conc] );
    return <Col>
        <h2 className="subtitle">Degree Requirements</h2>
        <ul>
            <ReqCourseText courseKeys={remainingCourses} fulfilled={false}></ReqCourseText>
            <ReqCourseText courseKeys={fulfilledCourses} fulfilled={true}></ReqCourseText>
        </ul>
    </Col>;
}