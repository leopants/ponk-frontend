import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "../Header/Header";
import "./Dashboard.css";

export default function Dashboard(props) {
    return (
        <Container fluid>
            <Row>
                <Col sm={{ span: 2, offset: 1 }} xs={{ span: 1, offset: 0 }}>
                    <Header />
                </Col>
                <Col sm={{ span: 4, offset: 5 }} xs={{ span: 5, offset: 6 }}>
                    <p className="welcome">
                        Welcome{" "}
                        {props.userFirstName.charAt(0).toUpperCase() +
                            props.userFirstName.slice(1)}
                        !
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="titleh1">Dashboard</h1>
                </Col>
            </Row>
        </Container>
    );
}
