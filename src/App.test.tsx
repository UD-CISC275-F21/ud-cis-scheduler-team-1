import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    beforeEach(() => {
        render(<App />);
    });
    
    it("renders UD CIS Scheduler text", () => {
        const linkElement = screen.getByText(/UD CIS Scheduler/i);
        expect(linkElement).toBeInTheDocument();
    });

    describe("CoursePool", () => {
        console.log("yay");
    });

    describe("Concentrations", () => {
        console.log("yay");
    });

    describe("FourYearPlan", () => {
        console.log("yay");
    });

    describe("Requirements", () => {
        console.log("yay");
    });

});
