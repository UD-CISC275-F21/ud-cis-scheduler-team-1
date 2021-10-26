import { Course } from "../interfaces/course";
import Catalog from "../data/catalog.json";

export function findCourse(name:string): Course{
    const code = name.substr(0, 4);
    console.log(code);
    console.log(Catalog.ACCT["ACCT 166"]);
    //const course:Course = Catalog.code[name];
    //return course;
    return{
        code: "Acct 106",
        name: "Accounting",
        descr: "Take accounting",
        credits: "3",
        preReq: "",
        restrict: "",
        breadth: "",
        typ: "fall",
    };
}