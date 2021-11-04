import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Semester, season } from "../interfaces/semester";
import "../App.css";

interface semesterTitleEdit {
    semester: Semester;
    setSemester: (s: Semester) => void;
    semesters: Semester[];
    setSemesters: (sems: Semester[]) =>void
}

export function SemesterTitleEdit({ semester, setSemester, semesters, setSemesters }: semesterTitleEdit): JSX.Element {
    const years = Array.from(Array(30).keys()).map(x => x + 2012);

    function compareSemesters(semester1: Semester, semester2: Semester): number {
        if (semester1.year < semester2.year) {
            return -1;
        } else if (semester1.year > semester2.year) {
            return 1;
        } else {
            if (semester1.season < semester2.season) {
                return -1;
            } else if (semester1.season > semester2.season) {
                return 1;
            }
        }
        return 0;
    }

    function updateSemesters():void{
        let tmp:Semester[] = [];
        for(let i = 0; i < semesters.length; i++){
            if((semesters[i].year === semester.year) && (semesters[i].season === semester.season)){
                tmp = [...tmp, semester];
            }else{
                tmp = [...tmp, semesters[i]];
            }
        }
        setSemesters(tmp);
    }

    return <Form>
        <Row className="g-2">
            <Col>
                <Form.Select aria-label="Select season" defaultValue={semester.season}
                    onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => {
                        const newSem: Semester = semester;
                        newSem.season = ev.target.value as season;
                        //const newSemester:Semester = {...semester, season: ev.target.value as season};
                        setSemester(newSem);
                        updateSemesters();
                    }}>
                    <option value={season.fall}>Fall</option>
                    <option value={season.winter}>Winter</option>
                    <option value={season.spring}>Spring</option>
                    <option value={season.summer}>Summer</option>
                </Form.Select>
            </Col>
            <Col>
                <Form.Select aria-label="Select year" defaultValue={semester.year}
                    onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => {
                        const newSem: Semester = semester;
                        newSem.year = +ev.target.value;
                        //const newSemester = {...semester, year: +ev.target.value};
                        setSemester(newSem);
                        updateSemesters();
                    }}>
                    <option>Select Year</option>
                    {years.map((year) => <option key={year}>{year}</option>)}
                </Form.Select>
            </Col>
        </Row>
    </Form>;
}