import { Course } from "../interfaces/course";
import Catalog from "../data/catalog.json";

export function findCourse(name:string): Course{
    const code = name.substr(0, 4);
    const CATALOG_DATA: Record<string, Record<string, Course>> = Catalog;
    let course:Course;
    try{
        course = CATALOG_DATA[code][name];
        console.log(course);
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
    console.log(course);
    return course;
}