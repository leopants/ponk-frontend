import React from "react";
import { Form, Button, Col, Row, Container, InputGroup } from "react-bootstrap";
import { PersonFill, KeyFill, PersonCircle } from "react-bootstrap-icons";
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
        <div className="loginDiv">
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <Form className="loginForm" onSubmit={handleSubmit}>
                            <h1 className="loginText">Login</h1>
                            <Row>
                                <Col xs={{ span: 10, offset: 1 }}>
                                    <Form.Group controlId="formBasicEmail">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <PersonCircle />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                value={usernameOrEmail}
                                                name="usernameOrEmail"
                                                type="text"
                                                placeholder="Username or email"
                                                onChange={(e) =>
                                                    setusernameOrEmail(
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{ span: 10, offset: 1 }}>
                                    <Form.Group controlId="formBasicPassword">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <KeyFill />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
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
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={{ span: 10, offset: 1 }}>
                                    <Form.Group
                                        style={{ alignItems: "center" }}
                                    >
                                        <Button
                                            block
                                            className="loginButton"
                                            variant="primary"
                                            type="submit"
                                        >
                                            Submit
                                        </Button>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
