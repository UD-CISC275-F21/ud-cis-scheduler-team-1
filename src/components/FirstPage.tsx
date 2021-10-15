import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function FirstPage({setPage}:{setPage:(s:string)=>void}): JSX.Element {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <h1>Plan your Degree</h1>
            <Button 
                variant="primary" onClick={
                    ()=>{
                        setPage("second-page");
                    }
                }>New Plan</Button>
            <Button variant="primary" onClick={handleShow}>
                Import
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Import Your Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body>Accept .JSON or .CVS File Only</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Upload</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
