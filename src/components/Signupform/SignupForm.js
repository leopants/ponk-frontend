import React, { Component } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import "./Signupform.css";
const axios = require("axios");

export default function SignupForm() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [password2, setPassword2] = React.useState("");

    const handleSubmit = (event) => {
        if (password == password2) {
            axios
                .post("https:ponk-backend.herokuapp.com/createuser", {
                    firstName: firstName,
                    lastName: lastName,
                    username: username,
                    email: email,
                    password: password,
                })
                .then(function (response) {
                    console.log(response.request.status);
                });
        } else {
            alert("Passwords do not match");
        }
        setEmail("");
        setPassword("");
        setPassword2("");
        setFirstName("");
        setLastName("");
        setUsername("");
        event.preventDefault();
    };

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Form onSubmit={handleSubmit}>
                            <h1 className="signupText">SignUp</h1>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    value={firstName}
                                    name="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                    name="lastName"
                                    value={lastName}
                                    type="text"
                                    placeholder="Last Name"
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                    name="email"
                                    value={email}
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                    name="username"
                                    value={username}
                                    type="text"
                                    placeholder="Username"
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    required
                                />
                            </Form.Group>

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

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                    name="password2"
                                    value={password2}
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={(e) =>
                                        setPassword2(e.target.value)
                                    }
                                    required
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
