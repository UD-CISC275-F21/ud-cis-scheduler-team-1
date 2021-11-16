import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders UD CIS Scheduler text", () => {
    render(<App />);
    const linkElement = screen.getByText(/UD CIS Scheduler/i);
    expect(linkElement).toBeInTheDocument();
});

describe("App", () => {

    beforeEach(() => {
        render(<App />);
    });

    describe("CoursePool", () => {
        console.log("yay");
    });

    describe("Concentrations", () => {
        it("has the degree type dropdown when the app loads", () => {
            const element = screen.queryByTestId("degree-select");
            expect(element).toBeInTheDocument();
        });
    });

    describe("FourYearPlan", () => {
        console.log("yay");
    });

    describe("Requirements", () => {
        console.log("yay");
    });

});