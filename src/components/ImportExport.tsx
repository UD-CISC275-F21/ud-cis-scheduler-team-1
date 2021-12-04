import React, { ChangeEvent, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Semester } from "../interfaces/semester";
import { CSVLink } from "react-csv";

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
    //handle show info on semester table after upload
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
                            style={{color:"#FFFFFF"}}
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
                <Col style={{width:"20em"}}><input type="file" accept="application/JSON" onChange={onJSONFileChange} onError={() => {
                    setShow(false);
                    alert("Time out. Please try again!");
                }}></input></Col>
                <Col><Button style={{width:"7em"}} onClick={onJSONFileSave}>Load JSON</Button></Col>
            </Row>}
            {csvFile && <Row className="imp-export-input-group">
                <Col style={{width:"20em"}}><input type="file" accept=".csv" onChange={onJSONFileChange} onError={() => {
                    setShow(false);
                    alert("Time out. Please try again!");
                }}></input></Col>
                <Col><Button style={{width:"7em"}} onClick={onJSONFileSave}>Load CSV</Button></Col>
            </Row>}
        </Modal.Footer>
    </Modal>;
}
