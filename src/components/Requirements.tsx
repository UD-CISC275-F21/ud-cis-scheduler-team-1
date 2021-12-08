import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import "../App.css";
import { updateCSBA } from "../data/csBA";
import { CSMinorUpdate } from "../data/minor";
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
        /*if (major === "Minor") {
            return CSMinorUpdate(semesters);
        } else {
            if (bsba === "BA") {
                return updateCSBA(semesters);
            } else {
                return findConcentration(conc,semesters);
            }
        }*/
        return CSMinorUpdate(semesters);
    }
    useEffect(() => {
        const newRemCourses : string[] = [];
        const newFulCourses : string[] = [];
        //console.log(getConc());
        const requirements = getConc()["requirements"];
        console.log(requirements);

        // Loops through all elements in the updated degree plan to split all
        // requirements into a fulfilled list and a remaining list
        for (const require of requirements) {
            if (require.requirement === "univ") {
                for (const [univKey, univValue] of Object.entries(require.satisfied)) { 
                    univValue && newFulCourses.push(univKey);
                    !univValue && newRemCourses.push(univKey);
                }
            } else if (["apMathTrack", "dataTrack", "discreteTrack", "contTrack"].includes(require.requirement)) {
                let trackComplete = false;
                let trackCount = 0;
                for (const [univKey, univValue] of Object.entries(require.satisfied)) { 
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
                if (require.satisfied) {
                    newFulCourses.push(require.requirement);
                } else {
                    newRemCourses.push(require.requirement);
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