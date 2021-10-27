import { Course } from "../interfaces/course";
import Catalog from "../data/catalog.json";

export function findCourse(name:string): Course{
    const code = name.substr(0, 4);
    const CATALOG_DATA: Record<string, Record<string, Course>> = Catalog;
    const course:Course = CATALOG_DATA[code][name];
    return course;
}