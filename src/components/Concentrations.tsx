import React from "react";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import "../App.css";

interface iConc {
    bsba: string;
    setBSBA: (sb: string) => void
    major: string;
    setMajor: (sm: string) => void
    conc: string;
    setConc: (sc: string) => void
}
export function Concentration({ bsba, setBSBA, major, setMajor, conc, setConc }: iConc): JSX.Element {
    return (
        <div>
            <h4>Degree Plan:
                <ButtonGroup>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-dark" data-testid="dropdown-basic" id="dropdown-basic">
                            {major}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Header>Major or Minor?</Dropdown.Header>
                            <Dropdown.Item data-testid="option-minor" onClick={() => {
                                setMajor("Minor"); setConc("Traditional Program"); setBSBA("BS");
                            }}>Minor</Dropdown.Item>
                            <Dropdown.Item data-testid="option-major" onClick={() => setMajor("Major")}>Major</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {major === "Major" && <Dropdown data-testid="concentration-row">
                        <Dropdown.Toggle variant="outline-dark" data-testid="dropdown-bsba" id="dropdown-basic">
                            {bsba}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Header>Degree Type</Dropdown.Header>
                            <Dropdown.Item data-testid="option" onClick={() => setBSBA("BS")}>BS</Dropdown.Item>
                            <Dropdown.Item data-testid="option" onClick={() => {
                                setBSBA("BA"); setConc("Traditional Program");
                            }}>BA</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                    {major === "Major" && bsba === "BS" && <Dropdown data-testid="concentration-dropdown" id="concentration-dropdown">
                        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                            {conc}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Header>Concentration</Dropdown.Header>
                            <Dropdown.Item data-testid="option" onClick={() => setConc("Traditional Program")}>Traditional Program</Dropdown.Item>
                            <Dropdown.Item data-testid="option" onClick={() => setConc("Artificial Intelligence and Robotics")}>Artificial Intelligence and Robotics</Dropdown.Item>
                            <Dropdown.Item data-testid="option" onClick={() => setConc("Bioinformatics")}>Bioinformatics</Dropdown.Item>
                            <Dropdown.Item data-testid="option" onClick={() => setConc("Cybersecurity")}>Cybersecurity</Dropdown.Item>
                            <Dropdown.Item data-testid="option" onClick={() => setConc("Data Science")}>Data Science </Dropdown.Item>
                            <Dropdown.Item data-testid="option" onClick={() => setConc("High Performance Computing")}>High Performance Computing</Dropdown.Item>
                            <Dropdown.Item data-testid="option" onClick={() => setConc("Systems and Networks")}>Systems and Networks Concentration</Dropdown.Item>
                            <Dropdown.Item data-testid="option" onClick={() => setConc("Theory and Computation")}>Theory and Computation</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                </ButtonGroup>
            </h4>
        </div>
    );
}