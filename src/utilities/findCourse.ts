import { Course } from "../interfaces/course";
import Catalog from "../data/catalog.json";

//function that will return the course object
export function findCourse(name:string): Course{
    const code = name.substring(0, 4);  //gets department, Ex ACCT
    const CATALOG_DATA: Record<string, Record<string, Course>> = Catalog;  //converting json to record type
    let course:Course;
    try{
        course = CATALOG_DATA[code][name]; //tries to get course in catalog, has default null course if not
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
    //exception handling
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

//returns list of all possible courses, for drop down option for course pool
export function getAllCourses(): string[]{
    const departments: string[] = Object.keys(Catalog);
    const CATALOG_DATA: Record<string, Record<string, Course>> = Catalog;
    let allCourses: string[] = [];
    for(let i = 0; i < departments.length; i++){
        allCourses = allCourses.concat(Object.keys(CATALOG_DATA[departments[i]]));
    } 
    return allCourses;
}