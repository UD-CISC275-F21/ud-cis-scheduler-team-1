import React, { ChangeEvent, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { season, Semester } from "../interfaces/semester";
import {Course} from "../interfaces/course";
import { CSVLink } from "react-csv";
import Papa from "papaparse";
import { findCourse } from "../utilities/findCourse";

interface iImportExport {
    show: boolean,
    setShow: (s: boolean) => void,
    semesters: Semester[],
    setSemesters: (setC: Semester[]) => void,
}
interface iCSVdata {
    courseName: string;
    creditShown: string;
    gradeShown: string;
}
export function ImportExport({ show, setShow, semesters, setSemesters }: iImportExport): JSX.Element {
    const [files, setFiles] = useState<string>("");
    const [csv, setCSV] = useState<string[][]>([[]]);
    const [jsonFile, setJsonFile] = useState<boolean>(false);
    const [csvFile, setCsvFile] = useState<boolean>(false);

    //handle read json file when uploading
    const onJSONFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const fileReader = new FileReader();
        if (e.target.files != null) {
            fileReader.readAsText(e.target.files[0]);
            fileReader.addEventListener("load", () => {
                setFiles(fileReader.result as string);
            });
            fileReader.addEventListener("error", error => {
                console.error("Error occurred reading file:", error);
                setShow(false);
                alert("Time out! Please try again!");
            });
        }
    };

    //handle show info on semester table after JSON file upload
    const onJSONFileSave = async () => {
        const newSems: Semester[] = [];
        setSemesters(newSems);
        for (let i = 0; i < JSON.parse(files).length; i++) {
            const sem: Semester = { season: JSON.parse(files)[i].season, year: JSON.parse(files)[i].year, courses: [] };
            for (let j = 0; j < JSON.parse(files)[i].courses.length; j++) {
                const newCourses = JSON.parse(files)[i].courses[j];
                await sem.courses.push(newCourses);
            }
            await newSems.push(sem);
        }
        await setSemesters(newSems);
        setShow(false);
    };

    //handle show info on semester table after CSV file upload 
    const onCSVFileChange = async () => {//unknown list from package
        const seasonList: string[] = ["Fall", "Spring", "Winter", "Summer"];
        const seasonMap : Record<string, season> = {
            "Fall": season.fall,
            "Spring":season.spring,
            "Winter":season.winter,
            "Summer":season.summer,
        };
        const newSems: Semester[] = [];
        setSemesters(newSems);
        for (let i = 1; i < csv.length; i++) {
            if (seasonList.includes(csv[i][0])) {
                const sem : Semester = {season : seasonMap[csv[i][0]] , year : Number(csv[i][1]), courses : []};
                let j = i + 2;
                for (; j < csv.length && csv[j][0].length !== 0; j++) {
                    const course : Course = findCourse(csv[j][0]);
                    await sem.courses.push({info : course, grade : csv[j][2]});
                    console.log(course);
                }
                await newSems.push(sem);
                i = j;
            }
        }
        await setSemesters(newSems);
        setShow(false);
    };

    //Download JSON file 
    const downloadJSON = async () => {
        const downloadData: Semester[] = semesters;
        const fileName = "My-Schedule";
        const json = JSON.stringify(downloadData, null, 2); //Convert JSON Array to string.
        const blob = new Blob([json]); //Convert JSON string to BLOB.
        const fileDownloadUrl = await URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = fileDownloadUrl;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    //Download CSV file 
    const CSVheaders = [
        { label: "", key: "courseName" },
        { label: "My Schedule", key: "creditShown" },
        { label: "", key: "gradeShown" },
    ];
    const CSVdata: iCSVdata[] = [];
    semesters.forEach(item => {
        CSVdata.push({
            courseName: "",
            creditShown: "",
            gradeShown: "",
        });
        CSVdata.push({
            courseName: item.season,
            creditShown: item.year.toString(),
            gradeShown: "",
        });
        CSVdata.push({
            courseName: "Courses",
            creditShown: "Credits",
            gradeShown: "Grades",
        });
        CSVdata.push({
            courseName: item.courses[0]?.info.code,
            creditShown: item.courses[0]?.info.credits,
            gradeShown: item.courses[0]?.grade,
        });
        for (let i = 1; i < item.courses.length; i++) {
            const nlist = item.courses[i];
            CSVdata.push({
                courseName: nlist.info.code,
                creditShown: nlist.info.credits,
                gradeShown: nlist.grade,
            });
        }
    });
    return <Modal show={show} onHide={() => {
        setShow(false);
    }}>
        <Modal.Header closeButton>
            <Modal.Title><strong>Import / Export</strong></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row><strong className="imp-export-subtile">Export your plan:</strong></Row>
            <Row className="imp-export-btn-group">
                <Col><Button className="imp-export-btn" onClick={downloadJSON}>Export as .JSON</Button></Col>
                <Col>
                    <Button className="imp-export-btn">
                        <CSVLink
                            style={{ color: "#000000" }}
                            id="csvlink"
                            data={CSVdata}
                            headers={CSVheaders}
                            filename={"My-Schedule.csv"}>
                            Download as .CSV
                        </CSVLink>
                    </Button>
                </Col>
            </Row>
            <Row><strong className="imp-export-subtile">Import your own file:</strong></Row>
            <Row className="imp-export-btn-group">

                <Col><Button className="imp-export-btn" onClick={() => {
                    setJsonFile(true);
                    setCsvFile(false);
                }}>Import as .JSON</Button></Col>
                <Col><Button className="imp-export-btn" onClick={() => {
                    setCsvFile(true);
                    setJsonFile(false);
                }}>Import as .CSV</Button></Col>
            </Row>
        </Modal.Body>
        <Modal.Footer className="imp-export-footer">
            {jsonFile && <Row className="imp-export-input-group">
                <Col style={{ width: "20em" }}><input type="file" accept="application/JSON" onChange={onJSONFileChange} onError={() => {
                    setShow(false);
                    alert("Time out. Please try again!");
                }}></input></Col>
                <Col><Button style={{ width: "7em" }} onClick={onJSONFileSave}>Load JSON</Button></Col>
            </Row>}
            {csvFile && <Row className="imp-export-input-group">
                <Col style={{ width: "20em" }}>
                    <input
                        type="file"
                        accept=".csv"
                        onChange={(event) => {
                            const cvsFiles = event.target.files;
                            console.log("files", cvsFiles);
                            if (cvsFiles) {
                                console.log(cvsFiles[0]);
                                Papa.parse(cvsFiles[0], {
                                    complete: function (results) {
                                        const listCSV: string[][] = JSON.parse(JSON.stringify(results.data));
                                        setCSV(listCSV);
                                    }
                                });

                            }
                        }}
                        onError={() => {
                            setShow(false);
                            alert("Time out. Please try again!");
                        }}
                    />
                </Col>
                <Col><Button style={{ width: "7em" }} onClick={onCSVFileChange}>Load CSV</Button></Col>
            </Row>}
        </Modal.Footer>
    </Modal>;
}
