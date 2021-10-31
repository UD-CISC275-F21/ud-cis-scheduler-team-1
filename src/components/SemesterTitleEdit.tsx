import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Semester, season } from "../interfaces/semester";

interface semesterTitleEdit {
    semester: Semester;
    setSemester: (s: Semester) => void;
    //semesters: Semester[];
}

export function SemesterTitleEdit({ semester, setSemester }: semesterTitleEdit): JSX.Element {
    const years = Array.from(Array(30).keys()).map(x => x + 1995);

    return <Form>
        <Row className="g-2">
            <Col>
                <Form.Select aria-label="Select season" defaultValue={season.fall}
                    onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => {
                        const newSemester = {...semester, season: ev.target.value as season};
                        setSemester(newSemester);
                        semester=newSemester;
                    }}>
                    <option value={season.fall}>Fall</option>
                    <option value={season.winter}>Winter</option>
                    <option value={season.spring}>Spring</option>
                    <option value={season.summer}>Summer</option>
                </Form.Select>
            </Col>
            <Col>
                <Form.Select aria-label="Select year" defaultValue={2021}
                    onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => {
                        const newSemester = {...semester, year: +ev.target.value};
                        setSemester(newSemester);
                        semester=newSemester;
                    }}>
                    <option>Select Year</option>
                    {years.map((year) => <option key={year}>{year}</option>)}
                </Form.Select>
            </Col>
        </Row>
    </Form>;
}