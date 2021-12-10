import { CourseDisplay } from "./course";

//enumerated type of what possible semester types are
export enum season {
    winter = "Winter",
    spring = "Spring",
    summer = "Summer", 
    fall = "Fall"
}

//interface for a single semester
export interface Semester {
    season: season      //above type
    year: number        //year of semester, ex 2021
    courses: CourseDisplay[]        //array of courses that are in semester
}