import React, { useState } from "react";
import { Button, Carousel, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

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
                            <h1>Welcome to UD CISC Scheduler</h1>
                            <h3>Use buttons on the side to navigate the usage guide</h3>
                        </Carousel.Item>
                        <Carousel.Item id="welcome-item">
                            <h3>Choose Your Degree Type</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Item >
                        <Carousel.Item id="welcome-item">
                            <h3>See Your Degree Requirement</h3>
                            <p>dfasfsad</p>
                        </Carousel.Item >
                        <Carousel.Item id="welcome-item">
                            <h3>Find Courses and Add to Plan</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Item >
                        <Carousel.Item id="welcome-item">
                            <h3>Modify Plan</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Item >
                        <Carousel.Item id="welcome-item">
                            <h3>Save / Load Your Plan</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Item >
                        <Carousel.Item id="welcome-item">
                            <h3>Access Guide</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

