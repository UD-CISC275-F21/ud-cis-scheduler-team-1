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

export function getURLConc(conc:string):string{
    const concURLS : Record<string, string> = {
        "Traditional Program": "https://catalog.udel.edu/preview_program.php?catoid=47&poid=34727&returnto=8860",
        "Artificial Intelligence and Robotics": "https://catalog.udel.edu/preview_program.php?catoid=47&poid=34982&returnto=8860",
        "Bioinformatics": "https://catalog.udel.edu/preview_program.php?catoid=47&poid=34983&returnto=8860",
        "Cybersecurity": "https://catalog.udel.edu/preview_program.php?catoid=47&poid=34981&returnto=8860",
        "Data Science": "https://catalog.udel.edu/preview_program.php?catoid=47&poid=34980&returnto=8860",
        "High Performance Computing": "https://catalog.udel.edu/preview_program.php?catoid=47&poid=34984&returnto=8860",
        "Systems and Networks": "https://catalog.udel.edu/preview_program.php?catoid=47&poid=34985&returnto=8860",
        "Theory and Computation": "https://catalog.udel.edu/preview_program.php?catoid=47&poid=34979&returnto=8860",
    };
    return concURLS[conc];
}

export function getUrl(bsba:string, major:string, conc:string): string{
    if(major === "Minor"){
        return "https://catalog.udel.edu/preview_program.php?catoid=47&poid=34733&returnto=8860";
    } else{
        if(bsba === "BA"){
            return "https://catalog.udel.edu/preview_program.php?catoid=47&poid=34726&returnto=8860";
        }else{
            return getURLConc(conc);
        }
    }
}

export function Requirements({ semesters, bsba, major, conc }: iReq): JSX.Element {
    const [remainingCourses,setRemainingCourses] = useState<string[]>([]);
    const [fulfilledCourses, setFulfilledCourses] = useState<string[]>([]);
    const url = getUrl(bsba, major, conc);

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
        //console.log(getConc());
        const requirements = getConc()["requirements"];

        // Loops through all elements in the updated degree plan to split all
        // requirements into a fulfilled list and a remaining list
        for (const require of requirements) {
            if (require.satisfied) {
                newFulCourses.push(require.requirement);
            } else {
                newRemCourses.push(require.requirement);
            }
            //}
        }
        setFulfilledCourses(newFulCourses);
        setRemainingCourses(newRemCourses);

    }, [semesters,bsba,major,conc] );
    return <Col className="sidecolumns" id="move-when-scroll">
        <h2 className="subtitle">Degree Requirements</h2>
        <p className="reqdesc">*See the <a href = {url} target="_blank" rel="noopener noreferrer">UD Catalog</a> for full requirement descriptions.</p>
        <ul>
            <ReqCourseText courseKeys={remainingCourses} fulfilled={false}></ReqCourseText>
            <ReqCourseText courseKeys={fulfilledCourses} fulfilled={true}></ReqCourseText>
        </ul>
    </Col>;
}