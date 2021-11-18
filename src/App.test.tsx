import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { Dropdown } from "react-bootstrap";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

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

        describe("Elements render correctly on app load", () => {

            it("has the degree type dropdown when the app loads", () => {
                const element = screen.queryByTestId("degree-select");
                expect(element).toBeInTheDocument();
            });
            it("has the concentration select visible when the app renders", () => {
                expect(screen.getByTestId("concentration-row")).toBeInTheDocument();
            });
            it("selects BS program with traditional program concentration upon load", () => {
                expect(screen.queryByText("Major")).toBeInTheDocument();
                expect(screen.queryByText("BS")).toBeInTheDocument();
                expect(screen.queryByText("Traditional Program")).toBeInTheDocument();
            });

        });

        describe("Major/Minor dropdown", () => {

            // https://jacobwicks.github.io/2020/05/16/testing-semantic-ui-react-dropdown.html
            it("enables and disables BA/BS and concentration correctly", () => {
                act(async () => {
                    userEvent.click(screen.getByText("Major"));
                    userEvent.click(screen.getByText("Minor"));
                });
                expect(screen.getByText("Minor")).toBeInTheDocument();
            });
        });
    });

    describe("FourYearPlan", () => {
        console.log("yay");
    });

    describe("Requirements", () => {
        console.log("yay");
    });

});
