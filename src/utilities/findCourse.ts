import { Course } from "../interfaces/course";
import Catalog from "../data/catalog.json";

export function findCourse(name:string): Course{
    const code = name.substr(0, 4);
    const CATALOG_DATA: Record<string, Record<string, Course>> = Catalog;
    let course:Course;
    try{
        course = CATALOG_DATA[code][name];
    }catch{
        console.log("catch");
        course = {
            code: "",
            name: "",
            descr: "",
            credits: "",
            preReq: "",
            restrict: "",
            breadth: "",
            typ: "",
        };
    }
    if(course === undefined){
        course = {
            code: "",
            name: "",
            descr: "",
            credits: "",
            preReq: "",
            restrict: "",
            breadth: "",
            typ: "",
        };
    }
    return course;
}

export function getAllCourses(): string[]{
    const departments: string[] = Object.keys(Catalog);
    const CATALOG_DATA: Record<string, Record<string, Course>> = Catalog;
    let allCourses: string[] = [];
    for(let i = 0; i < departments.length; i++){
        allCourses = allCourses.concat(Object.keys(CATALOG_DATA[departments[i]]));
    } 
    return allCourses;
}