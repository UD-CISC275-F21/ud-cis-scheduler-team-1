import React, { useState } from "react";
import {Carousel, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

interface welc {
    show: boolean;
    setShow: (s: boolean) => void;
}

export function Welcome({ show, setShow }: welc): JSX.Element {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: number, e: Record<string, unknown> | null) => { //type of e is from react bootstrap
        setIndex(selectedIndex);
        console.log(e);
    };
    return (
        <div>
            {show && <Modal size="lg" show={show} onHide={() => {
                setShow(false);
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>Usage Guide</Modal.Title>
                </Modal.Header>
                <Modal.Body className="welcome-container">
                    <Carousel className="welcome-carousel" variant="dark" activeIndex={index} interval={null} onSelect={handleSelect}>
                        <Carousel.Item id="welcome-item">
                            <Carousel.Caption id="welcome-carousel-cap">
                                <h1>Welcome to UD CISC Scheduler</h1>
                                <p>You can click button on the right to see step-by-step guiding of how to navigate this website and create an effective plan for your degree!</p>
                                <p>This guide can also be accessed by the help button on the top right corner!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item id="welcome-item">
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item >
                        <Carousel.Item id="welcome-item">
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>}
        </div>
    );
}

