import React, { useState } from "react";
import { Button, Carousel, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import degreetype from "../assets/imgs/degreetype.png";
import addcourse from "../assets/imgs/addcourse.png";
import modifycourse from "../assets/imgs/modifycourse.png";
import saveload from "../assets/imgs/saveload.png";
import guide from "../assets/imgs/guide.png";



interface welc {
    show: boolean;
    setShow: (s: boolean) => void;
}

export function Welcome({ show, setShow }: welc): JSX.Element {
    const [index, setIndex] = useState<number>(0);
    const handleSelect = (selectedIndex: number, e: Record<string, unknown> | null) => { //type of e is from react bootstrap
        setIndex(selectedIndex);
        console.log(e);
    };
    return (
        <div>
            {show && <Modal size="lg" show={show} onHide={() => {
                setShow(false);
                setIndex(0);
            }}>
                <Modal.Header>
                    <Modal.Title>Usage Guide</Modal.Title>
                </Modal.Header>
                <Modal.Body className="welcome-container">
                    <Carousel className="welcome-carousel" variant="dark" activeIndex={index} interval={null} onSelect={handleSelect}>
                        <Carousel.Item id="welcome-item-front">
                            <h1>Welcome to the UD CIS Scheduler</h1>
                            <h3>Use buttons on the side to navigate the usage guide.</h3>
                        </Carousel.Item>
                        <Carousel.Item id="welcome-item">
                            <h3>Choose Your Degree Type</h3>
                            <img src={degreetype} />
                        </Carousel.Item >
                        <Carousel.Item id="welcome-item">
                            <h3>Find Courses and Add to Plan</h3>
                            <img src={addcourse} />
                        </Carousel.Item >
                        <Carousel.Item id="welcome-item">
                            <h3>Modify Course and Semester</h3>
                            <img src={modifycourse} />
                        </Carousel.Item >
                        <Carousel.Item id="welcome-item">
                            <h3>Check Requirements | Save/Load Plan</h3>
                            <img src={saveload} />
                        </Carousel.Item >
                        <Carousel.Item id="welcome-item">
                            <h3>Access Guide</h3>
                            <img src={guide} />
                        </Carousel.Item >
                    </Carousel>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        setShow(false);
                        setIndex(0);
                    }}>Close Guide</Button>
                </Modal.Footer>
            </Modal>}
        </div>
    );
}

