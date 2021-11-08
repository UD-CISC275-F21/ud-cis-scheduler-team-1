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

interface iReq {
    semesters: Semester[];
    setSemesters: (s: Semester[]) => void;
    bsba: string;
    major: string;
    conc: string;
}
function isNum(val: string) {
    return !isNaN(+val);
}
export function Requirements({ semesters, setSemesters, bsba, major, conc }: iReq): JSX.Element {
    const [remainCourses,setRemainCourses] = useState<string[]>([]);
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
    //Somewhat functioning
    useEffect(() => {
        setRemainCourses([]);
        const reqObj1 = Object.entries(getConc());
        const tmp : string[] = [];
        for (let i = 0 ; i < reqObj1.length ; i++){
            if (reqObj1[i][1]===false){
                tmp.push(reqObj1[i][0]);
                setRemainCourses(tmp);
            } else if (typeof(reqObj1[i][1]) !== "boolean"){
                const reqObj2 = Object.entries(reqObj1[i][1]);
                for (let j = 0; j < reqObj2.length ; j++){
                    if (reqObj2[j][1]===false){
                        tmp.push(reqObj2[j][0]);
                        setRemainCourses(tmp);
                    }
                }
                console.log(remainCourses);
            }
        }
    }, [semesters,bsba,major,conc] );
    return <Col>
        <h2 className="subtitle">Degree Requirements</h2>
        <p>Below are the list of degree requirements that remain unsatisfied!</p>
        {remainCourses.map(c =>
            <div key={c}>{c}</div> 
        )}
        
    </Col>;
}