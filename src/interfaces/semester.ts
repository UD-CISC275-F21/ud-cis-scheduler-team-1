import { CourseDisplay } from "./course";

export enum season {
    winter = "Winter",
    spring = "Spring",
    summer = "Summer", 
    fall = "Fall"
}
export interface Semester {
    season: season
    year: number
    courses: CourseDisplay[]
}