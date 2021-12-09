//interface for structure that gets loaded out of catalog.json
//catalog.json has course information for all courses
export interface Course{
    code: string,  //code, ex ACCT 207
    name: string, //name, ex Introduction to Accounting
    descr: string, //course description, pretty self explanatory
    credits: string, //number of credits the course counts for
    preReq: string,     //sentence from course catalog that lists the pre requisites from UD catalog
    restrict: string,   //sentence that has any of the restrictions listed from UD catalog
    breadth: string,    // What university/College of A&S breadth that is satisfied
    typicallyOffered: string,        //What semester the course is typically offered
}

//interface for displaying in table
export interface CourseDisplay{
    info: Course,   //has information fromm above interface
    grade: string,  //grade earned
}