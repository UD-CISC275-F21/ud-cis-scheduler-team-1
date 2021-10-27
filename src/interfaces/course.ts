export interface CourseTable {
    name: string;
    credits: number;
    grade: string;
}

export interface Course{
    code: string,
    name: string,
    descr: string,
    credits: string,
    preReq: string,
    restrict: string,
    breadth: string,
    typ: string,
}

export interface CourseDisplay{
    info: Course,
    grade: string,
}