import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import "../App.css";
import { CSAIRobots, updateCSAIRobots } from "../data/csAIRobots";
import { CSBS, updateCSBS } from "../data/csBS";
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
import { findConcentration } from "../utilities/findConcentration";

interface iReq {
    semesters: Semester[];
    bsba: string;
    major: string;
    conc: string;
}

export function Requirements({ semesters, bsba, major, conc }: iReq): JSX.Element {
    const [remainingCourses,setRemainingCourses] = useState<string[]>([]);
    const [fulfilledCourses, setFulfilledCourses] = useState<string[]>([]);

    function getConc() {
        if (major === "Minor") {
            return CSMinorUpdate(semesters);
        } else {
            if (bsba === "BA") {
                return updateCSBA(semesters);
            } else {
                return findConcentration(conc,semesters);
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
                        univValue && !newFulCourses.includes(univKey) && newFulCourses.push(univKey);
                        !univValue && !newRemCourses.includes(univKey) && newRemCourses.push(univKey);
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
    return <Col id="move-when-scroll">
        <h2 className="subtitle">Degree Requirements</h2>
        <ul>
            <ReqCourseText courseKeys={remainingCourses} fulfilled={false}></ReqCourseText>
            <ReqCourseText courseKeys={fulfilledCourses} fulfilled={true}></ReqCourseText>
        </ul>
    </Col>;
}