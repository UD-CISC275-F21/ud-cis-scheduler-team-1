import React from "react";
import { Col } from "react-bootstrap";
import "../App.css";

export function Requirements(): JSX.Element {

    return<Col>
        <h2 className = "subtitle">Degree Requirements</h2>
        <p>Below are the list of degree requirements that remain unsatisfied.</p>
    </Col>;
}