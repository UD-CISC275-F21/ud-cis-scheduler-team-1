import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    beforeEach(() => {
        render(<App />);
    });
    it("renders UD CIS Scheduler text", () => {
        expect(screen.getByText(/UD CIS Scheduler/i)).toBeInTheDocument();
    });
    describe("Welcome", () =>{
        it("renders welcome modal and usage guide", () => {
            expect(screen.queryByText("Usage Guide")).toBeInTheDocument();
        });
        it("closes welcome modal when click close button", () => {
            fireEvent.click(screen.getByRole('button', { name: "Close Guide" }));
            expect(screen.queryByText("Usage Guide")).not.toBeInTheDocument();
        });
        it("renders welcome modal when click 'Help' button", () => {
            fireEvent.click(screen.getByRole('button', { name: "Close Guide" }));
            fireEvent.click(screen.getByRole('button', { name: "Help" }));
            expect(screen.queryByText("Usage Guide")).toBeInTheDocument();
        });
    });
    describe("Concentrations", () => {
        describe("Elements render correctly on app load", () => {
            it("has the degree type dropdown when the app loads", () => {
                expect(screen.queryByTestId("dropdown-basic")).toBeInTheDocument();
            });
            it("has the concentration select visible when the app renders", () => {
                expect(screen.getByTestId("concentration-dropdown")).toBeInTheDocument();
            });
            it("selects BS program with traditional program concentration upon load", () => {
                expect(screen.queryByText("Major")).toBeInTheDocument();
                expect(screen.queryByText("BS")).toBeInTheDocument();
                expect(screen.queryByText("Traditional Program")).toBeInTheDocument();
            });

        });

        /*describe("Major/Minor dropdown", () => {

            // https://jacobwicks.github.io/2020/05/16/testing-semantic-ui-react-dropdown.html
            it("enables and disables BA/BS and concentration correctly", () => {
                act(async () => {
                    userEvent.click(screen.getByText("Major"));
                    userEvent.click(screen.getByText("Minor"));
                });
                expect(screen.getByText("Minor")).toBeInTheDocument();
            });
        });*/
    });
    describe("FourYearPlan", () => {
        it("Simulates Add Semester click and checks if modal pops up", () => {
            fireEvent.click(screen.getByText(/\+ Add Semester/i));
            expect(screen.queryByText("Adding New Semester")).toBeInTheDocument();
        });
        describe("AddSemesterModal", ()=> {
            it("Closes Modal on cancel button", () => {
                fireEvent.click(screen.getByText(/\+ Add Semester/i));
                fireEvent.click(screen.getByText("Cancel"));         
                expect(screen.queryByText("Adding New Semester")).not.toBeInTheDocument();
            });
            it("Checks cannot add same semester ", () => {
                fireEvent.click(screen.getByText(/\+ Add Semester/i));
                fireEvent.click(screen.getByText("Add Semester"));         
                expect(screen.queryByText("Semester already in your plan!")).toBeInTheDocument();
            });
        });
    });
});
