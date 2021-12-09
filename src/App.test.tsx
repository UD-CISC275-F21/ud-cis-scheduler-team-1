import React from "react";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { groupA } from "./data/univReqs";

function performDragandDrop(courseCode:string): void{
    fireEvent.click(screen.getByRole("textbox", { name: "Course Code" }));
    fireEvent.change(screen.getByRole("textbox", { name: "Course Code" }), { target: { value: courseCode } });
    fireEvent.click(screen.getByRole("option", { name: courseCode }));
    fireEvent.click(screen.getByRole("button", { name: "Add Course" }));
    fireEvent.dragStart(screen.getByRole("drag"));
    fireEvent.dragEnter(screen.getByRole("columnheader", { name: /fall 2021/i }));
    fireEvent.dragOver(screen.getByRole("columnheader", { name: /fall 2021/i }));
    fireEvent.drop(screen.getByRole("columnheader", { name: /fall 2021/i }));
}

function testIndividualCourse(courseCode:string, requirement:string):void{
    describe(courseCode + " requirements renders correctly on load", () =>{
        it("has " + courseCode + "when the app loads", () =>{
            const course = screen.queryAllByText(requirement);
            const [expectedNode] = course.filter(element => element.tagName === "li");
            expect(expectedNode);
        });
    });
    describe(courseCode + " requirement is crossed out when course put in plan", () =>{
        it(courseCode + " is crossed out after drag and drop", () =>{
            performDragandDrop(courseCode);
            const course = screen.queryAllByText(requirement);
            const [expectedNode] = course.filter(element => element.tagName === "del");
            expect(expectedNode);
        });
    });
}

describe("App", () => {
    beforeEach(() => {
        render(<App />);
    });
    it("renders UD CIS Scheduler text", () => {
        expect(screen.getByText(/UD CIS Scheduler/i)).toBeInTheDocument();
    });
    describe("Welcome", () => {
        it("renders welcome modal and usage guide", () => {
            expect(screen.queryByText("Usage Guide")).toBeInTheDocument();
        });
        it("closes welcome modal when click close button", () => {
            fireEvent.click(screen.getByRole("button", { name: "Close Guide" }));
            expect(screen.queryByText("Usage Guide")).not.toBeInTheDocument();
        });
        it("renders welcome modal when click Help button", () => {
            fireEvent.click(screen.getByRole("button", { name: "Close Guide" })); //close the modal first
            expect(screen.queryByText("Usage Guide")).not.toBeInTheDocument();
            fireEvent.click(screen.getByRole("button", { name: "Help" })); //then reopen modal with help button
            expect(screen.queryByText("Usage Guide")).toBeInTheDocument();
        });
    });
    /*
    describe("CoursePool", () => {
        it("adds a course to course pool", () => {
            fireEvent.click(screen.getByRole("button", { name: "Close Guide" }));
            expect(screen.getByText("Drag and drop courses from course pool into a semester.")).toBeInTheDocument();
            fireEvent.click(screen.getByRole("textbox", { name: "Course Code" }));
            fireEvent.change(screen.getByRole("textbox", { name: "Course Code" }), { target: { value: "CISC 108" } });
            fireEvent.click(screen.getByRole("option", { name: "CISC 108" }));
            fireEvent.click(screen.getByRole("button", { name: "Add Course" }));
            expect(screen.queryByText("Drag and drop courses from course pool into a semester.")).not.toBeInTheDocument();
            expect(screen.queryByText("CISC 108 Introduction to Computer Science I")).toBeInTheDocument();
        });
        it("drags and drops a course to semester table", () => {
            performDragandDrop("CISC 108");
            //when course is successfully dragged over to the semester. 
            //coursepool list will be empty so the "Drag and drop courses from course pool into a semester." text will appear again
            expect(screen.queryByText("Drag and drop courses from course pool into a semester.")).toBeInTheDocument();
        });
    });
    describe("Requirements", ()=> {
        describe("124 credits are satisfied", () =>{
            it("124 is crossed out", () =>{
                const coursesTo124:string[] = ["ENGL 110", "EGGG 101", "CISC 498","MATH 512","AFRA 206","AFRA 250",
                    "AFRA 442","CISC 601","CISC 604", "CISC 605","CISC 606","SPAN 107", "ACCT 200","ACCT 207","ACCT 208",
                    "ACCT 302","ACCT 305","ACCT 313","ACCT 315","ACCT 316","ACCT 320","ACCT 327","ACCT 350","ACCT 351",
                    "ACCT 352","ACCT 395","ACCT 402","ACCT 405","ACCT 410","ACCT 413","ACCT 414","ACCT 415","ACCT 416",
                    "ACCT 417","ACCT 418","ACCT 420","ACCT 425","ACCT 433","ACCT 450","ACCT 457","MATH 210"];
                for (const courseCode of coursesTo124){
                    performDragandDrop(courseCode);
                }
                const course = screen.queryAllByText("124+ Credits Total");
                const [expectedNode] = course.filter(element => element.tagName === "del");
                expect(expectedNode);
            });
        });
        describe("Individual Courses Satisfy Reqs", () =>{
            const indCourses:string[] = ["ENGL 110", "CISC 108", "CISC 181", "CISC 210", "CISC 220", "CISC 260", 
                "CISC 275", "CISC 303", "CISC 320", "CISC 361", "CISC 372", "MATH 210", "MATH 241", "MATH 242", "CISC 355"];
            for(const courseCode of indCourses){
                testIndividualCourse(courseCode, courseCode);
            }
        });
        describe("EGG 101 satisfied fys", () =>{
            it("has  fys when the app loads", () =>{
                const course = screen.queryAllByText("First Year Seminar*");
                const [expectedNode] = course.filter(element => element.tagName === "li");
                expect(expectedNode);
            });
            it("EGGG 101 satisfies requirement", () =>{
                performDragandDrop("EGGG 101");
                const course = screen.queryAllByText("First Year Seminar*");
                const [expectedNode] = course.filter(element => element.tagName === "del");
                expect(expectedNode);
            });
        });
        describe("Satisfying Breadths", () =>{
            testIndividualCourse(groupA[0], "Group A Breadth (3 cr.)*");
        });
    });
    */
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
    });
    describe("FourYearPlan", () => {
        it("Simulates Add Semester click and checks if modal pops up", () => {
            fireEvent.click(screen.getByText(/\+ Add Semester/i));
            expect(screen.queryByText("Adding New Semester")).toBeInTheDocument();
        });
        describe("AddSemesterModal", () => {
            it("adds a semester in plan", async () => {
                expect(screen.queryByText(/fall 2022/i)).not.toBeInTheDocument();
                userEvent.click(screen.getByText(/\+ Add Semester/i));
                expect(screen.queryByText("Adding New Semester")).toBeInTheDocument();
                await act(async () => {
                    userEvent.click(screen.getByRole("button", { name: "2021" }));
                });
                await userEvent.click(screen.getByRole("button", { name: "2022" }));
                await userEvent.click(screen.getByRole("button", { name: "Add Semester" }));
                expect(screen.queryByText("Adding New Semester")).not.toBeInTheDocument();
                expect(screen.getByRole("columnheader", { name: /fall 2022/i })).toBeInTheDocument();
            });
            it("closes Modal on cancel button", () => {
                fireEvent.click(screen.getByText(/\+ Add Semester/i));
                fireEvent.click(screen.getByText("Cancel"));
                expect(screen.queryByText("Adding New Semester")).not.toBeInTheDocument();
            });
            it("Checks cannot add same semester ", () => {
                fireEvent.click(screen.getByText(/\+ Add Semester/i));
                fireEvent.click(screen.getByText("Add Semester"));
                expect(screen.queryByText("Semester already in your plan!")).toBeInTheDocument();
            });
            it("deletes a semester", () => {
                expect(screen.queryByText("Fall 2021")).toBeInTheDocument();
                const row = screen.getByRole("row", { name: /fall 2021 x/i });
                fireEvent.click(within(row).getByRole("button", { name: /x/i }));
                expect(screen.queryByText("Fall 2021")).not.toBeInTheDocument();
            });
        });
        describe("SemesterTable", () => {
            it("deletes a course from semester table", () => {
                expect(screen.queryByText(/cisc 108 - introduction to computer science i/i)).toBeInTheDocument();
                const row = screen.getByRole("row", { name: /cisc 108 - introduction to computer science i 3 - x/i });
                fireEvent.click(within(row).getByRole("button", { name: /x/i }));
                expect(screen.queryByText(/cisc 108 - introduction to computer science i/i)).not.toBeInTheDocument();
            });
            describe("CourseModal", () => {
                it("loads course modal when click in a course", () => {
                    performDragandDrop("CISC 108");
                    expect(screen.queryByText(/cisc 108 - introduction to computer science i/i)).toBeInTheDocument();
                    fireEvent.click(screen.getByText(/cisc 108 - introduction to computer science i/i));
                    expect(screen.getByText(/university: mathematics, natural sciences and technology; a&s: group d: a&s math, nat sci & technology/i)).toBeInTheDocument();
                });
                it("close course modal with closing button",  () => {
                    fireEvent.click(screen.getByText(/cisc 108 - introduction to computer science i/i));
                    const expectVal = screen.queryByText(/university: mathematics, natural sciences and technology; a&s: group d: a&s math, nat sci & technology/i);
                    expect(expectVal).toBeInTheDocument();
                    fireEvent.click(screen.getByRole("button", { name: "Save Changes" }));
                    expect(expectVal).not.toBeInTheDocument();
                });
            });
        });
    });
});

