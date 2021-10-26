import React from "react";
import { ButtonGroup, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { Semester, season } from "../interfaces/semester";

/*interface semesterTitleEdit {
  semester: Semester;
  setSemester: (s: Semester[]) => void;
  semesters: Semester[];
}*/

export function SemesterTitleEdit(): JSX.Element {
    return <div>
        <Form>
            <Form.Select aria-label="Select season">
                <option>Fall</option>
                <option>Winter</option>
                <option>Spring</option>
                <option>Summer</option>
            </Form.Select>
        </Form>
    </div>;
}