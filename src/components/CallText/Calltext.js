import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Calltext.css";
import { Animated } from "react-animated-css";

function Calltext() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={12} xs={12}>
                        <Animated
                            animationIn="fadeInDown"
                            animationOut="fadeOut"
                        >
                            <h1>There is no bad question.</h1>
                            <p>
                                connect directly with our growing community of
                                ponkers & end-users of the latest enterprise
                                software solutions.
                            </p>
                        </Animated>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Calltext;
