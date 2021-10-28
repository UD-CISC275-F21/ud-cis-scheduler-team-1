import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Semester, season } from "../interfaces/semester";

/*interface semesterTitleEdit {
  semester: Semester;
  setSemester: (s: Semester[]) => void;
  semesters: Semester[];
}*/

export function SemesterTitleEdit(): JSX.Element {
    const years = Array.from(Array(30).keys()).map(x => x + 1995);

    return <Form>
        <Row className="g-2">
            <Col>
                <Form.Select aria-label="Select season">
                    <option key={season.fall}>Fall</option>
                    <option key={season.winter}>Winter</option>
                    <option key={season.spring}>Spring</option>
                    <option key={season.summer}>Summer</option>
                </Form.Select>
            </Col>
            <Col>
                <Form.Select aria-Label="Select year" defaultValue={2021}>
                    <option>Select Year</option>
                    {years.map((year) => <option key={year}>{year}</option>)}
                </Form.Select>
            </Col>
        </Row>
    </Form>;
}