import React from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import "./Loginform.css";
const axios = require("axios");

export default function LoginForm() {
    const [usernameOrEmail, setusernameOrEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (event) => {
        console.log(usernameOrEmail);
        console.log(password);
        try {
            axios
                .get("https://ponk-backend.herokuapp.com/checkuser", {
                    params: {
                        usernameOrEmail: usernameOrEmail,
                        password: password,
                    },
                })
                .then(function (response) {
                    if (response.request.status == 200) {
                        alert("COCK AND BALLS");
                    }
                });
        } catch (err) {
            alert("THAT THANG BLEEDING p");
        }
        setusernameOrEmail("");
        setPassword("");
        event.preventDefault();
    };

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Form className="loginForm" onSubmit={handleSubmit}>
                            <h1 className="loginText">Login</h1>
                            <Row>
                                <Col sm={{ span: 10, offset: 1 }}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control
                                            value={usernameOrEmail}
                                            name="usernameOrEmail"
                                            type="text"
                                            placeholder="Enter username or email"
                                            onChange={(e) =>
                                                setusernameOrEmail(
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={{ span: 10, offset: 1 }}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control
                                            name="password"
                                            value={password}
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={{ span: 10, offset: 1 }}>
                                    <Button
                                        className="loginButton"
                                        variant="primary"
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
