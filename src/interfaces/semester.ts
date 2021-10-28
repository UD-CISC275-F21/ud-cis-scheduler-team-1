import { Course } from "./course";
export enum season {
    fall = "Fall",
    winter = "Winter",
    spring = "Spring",
    summer = "Summer"
}
export interface Semester {
    season: season
    year: number    
    courses: Course[]
}