import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import "../App.css";

interface iConc{
    bsba : string;
    setBSBA : (sb : string) =>void
    major: string;
    setMajor: (sm: string) => void
    conc: string;
    setConc: (sc: string) => void
}
export function Concentration({bsba,setBSBA,major,setMajor,conc,setConc}:iConc): JSX.Element {
    return (
        <Container>
            <div id="major-minor-row" data-testid="degree-select">
                <Dropdown>
                    <strong>Computer Science : </strong>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                        {major}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => {
                            setMajor("Minor"); setConc("Traditional Program"); setBSBA("BS");
                        }}>Minor</Dropdown.Item>
                        <Dropdown.Item onClick={() => setMajor("Major")}>Major</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {major === "Major" && <Dropdown>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                        {bsba}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setBSBA("BS")}>BS</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setBSBA("BA"); setConc("Traditional Program");
                        }}>BA</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>}
            </div>
            {major === "Major" && bsba === "BS" && <div id="concentration-dropdown">
                <strong>Concentration : </strong>
                <Dropdown>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                        {conc}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setConc("Traditional Program")}>Traditional Program</Dropdown.Item>
                        <Dropdown.Item onClick={() => setConc("Artificial Intelligence and Robotics")}>Artificial Intelligence and Robotics</Dropdown.Item>
                        <Dropdown.Item onClick={() => setConc("Bioinformatics")}>Bioinformatics</Dropdown.Item>
                        <Dropdown.Item onClick={() => setConc("Cybersecurity")}>Cybersecurity</Dropdown.Item>
                        <Dropdown.Item onClick={() => setConc("Data Science")}>Data Science </Dropdown.Item>
                        <Dropdown.Item onClick={() => setConc("High Performance Computing")}>High Performance Computing</Dropdown.Item>
                        <Dropdown.Item onClick={() => setConc("Systems and Networks")}>Systems and Networks Concentration</Dropdown.Item>
                        <Dropdown.Item onClick={() => setConc("Theory and Computation")}>Theory and Computation</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>}
        </Container>
    );
}