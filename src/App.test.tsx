import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {

    beforeEach(() => {
        render(<App />);
    });

    it("renders UD CIS Scheduler text", () => {
        const linkElement = screen.getByText(/UD CIS Scheduler/i);
        expect(linkElement).toBeInTheDocument();
    });

    describe("Concentrations", () => {

        describe("Elements render correctly on app load", () => {

            it("has the degree type dropdown when the app loads", () => {
                const element = screen.queryByTestId("dropdown-basic");
                expect(element).toBeInTheDocument();
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
                const dropdown = screen.getByTestId("major-minor");
                fireEvent.click(dropdown);
                const options = screen.getAllByTestId("option-majorminor");
                fireEvent.click(options[1]);
                expect(options[1].textContent).toBeInTheDocument();
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

    /*
    describe("Requirements", () => {
        console.log("yay");
    });*/

});
