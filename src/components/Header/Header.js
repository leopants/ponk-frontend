import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Header.css";

function Header() {
    return (
        <div>
            <Container fluid>
                <Row style={{ height: "150px" }}>
                    <Col sm={{ span: 2, offset: 1 }}>
                        <Navbar.Brand className="logo" href="#home">
                            <svg
                                style={{ paddingRight: "0px" }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="57.69"
                                height="57.69"
                                viewBox="0 0 57.69 57.69"
                            >
                                <g
                                    id="Group_25"
                                    data-name="Group 25"
                                    transform="translate(28.845) rotate(45)"
                                >
                                    <g
                                        id="Group_22"
                                        data-name="Group 22"
                                        transform="translate(0 0)"
                                    >
                                        <circle
                                            id="Ellipse_1"
                                            data-name="Ellipse 1"
                                            cx="5.828"
                                            cy="5.828"
                                            r="5.828"
                                            transform="translate(0 0)"
                                            fill="#0a84ff"
                                        />
                                        <circle
                                            id="Ellipse_2"
                                            data-name="Ellipse 2"
                                            cx="5.828"
                                            cy="5.828"
                                            r="5.828"
                                            transform="translate(14.569 0)"
                                            fill="rgba(10,132,255,0.25)"
                                        />
                                        <circle
                                            id="Ellipse_3"
                                            data-name="Ellipse 3"
                                            cx="5.828"
                                            cy="5.828"
                                            r="5.828"
                                            transform="translate(29.138 0)"
                                            fill="rgba(10,132,255,0.7)"
                                        />
                                    </g>
                                    <g
                                        id="Group_23"
                                        data-name="Group 23"
                                        transform="translate(0 14.569)"
                                    >
                                        <circle
                                            id="Ellipse_1-2"
                                            data-name="Ellipse 1"
                                            cx="5.828"
                                            cy="5.828"
                                            r="5.828"
                                            transform="translate(0 0)"
                                            fill="rgba(10,132,255,0.25)"
                                        />
                                        <circle
                                            id="Ellipse_3-2"
                                            data-name="Ellipse 3"
                                            cx="5.828"
                                            cy="5.828"
                                            r="5.828"
                                            transform="translate(29.138 0)"
                                            fill="rgba(10,132,255,0.25)"
                                        />
                                    </g>
                                    <g
                                        id="Group_24"
                                        data-name="Group 24"
                                        transform="translate(0 29.138)"
                                    >
                                        <circle
                                            id="Ellipse_1-3"
                                            data-name="Ellipse 1"
                                            cx="5.828"
                                            cy="5.828"
                                            r="5.828"
                                            transform="translate(0 0)"
                                            fill="rgba(10,132,255,0.7)"
                                        />
                                        <circle
                                            id="Ellipse_2-2"
                                            data-name="Ellipse 2"
                                            cx="5.828"
                                            cy="5.828"
                                            r="5.828"
                                            transform="translate(14.569 0)"
                                            fill="rgba(10,132,255,0.25)"
                                        />
                                        <circle
                                            id="Ellipse_3-3"
                                            data-name="Ellipse 3"
                                            cx="5.828"
                                            cy="5.828"
                                            r="5.828"
                                            transform="translate(29.138 0)"
                                            fill="#0a84ff"
                                        />
                                    </g>
                                </g>
                            </svg>{" "}
                            Ponk
                        </Navbar.Brand>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;
