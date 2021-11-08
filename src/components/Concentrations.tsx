import React, { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import "../App.css";

export function Concentration(): JSX.Element {
    const [bsba, setBSBA] = useState<string>("BS");
    const [major, setMajor] = useState<string>("Major");
    const [conc, setConc] = useState<string>("Traditional Program");
    return (
        <Container id="concentration-container">
            <div id="major-minor-row">
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
                        <Dropdown.Item onClick={() => setConc("Artificial Intelligence and Robotics Concentration")}>Artificial Intelligence and Robotics Concentration</Dropdown.Item>
                        <Dropdown.Item onClick={() => setConc("Bioinformatics Concentration")}>Bioinformatics Concentration</Dropdown.Item>
                        <Dropdown.Item onClick={() => setConc("Cybersecurity Concentration")}>Cybersecurity Concentration</Dropdown.Item>
                        <Dropdown.Item onClick={() => setConc("Data Science Concentration")}>Data Science Concentration</Dropdown.Item>
                        <Dropdown.Item onClick={() => setConc("High Performance Computing Concentration")}>High Performance Computing Concentration</Dropdown.Item>
                        <Dropdown.Item onClick={() => setConc("Systems and Networks Concentration")}>Systems and Networks Concentration</Dropdown.Item>
                        <Dropdown.Item onClick={() => setConc("Theory and Computation Concentration")}>Theory and Computation Concentration</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>}
        </Container>
    );
}