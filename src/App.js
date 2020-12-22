import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignupForm from "./components/Signupform/SignupForm";
import LoginForm from "./components/Loginform/LoginForm";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Calltext from "./components/CallText/Calltext";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
        };
    }

    myCallback = (dataFromChild) => {
        this.setState({ firstName: dataFromChild });
    };

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact>
                        <Container fluid>
                            <Row>
                                <Col>
                                    <Header />
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                    sm={{ span: 6, offset: 3 }}
                                    xs={{ span: 8, offset: 2 }}
                                >
                                    <Calltext />
                                </Col>
                            </Row>
                            <Row className="formRow">
                                <Col
                                    sm={{ span: 6, offset: 3 }}
                                    md={{ span: 6, offset: 3 }}
                                    lg={{ span: 3, offset: 3 }}
                                    xs={{ span: 8, offset: 2 }}
                                >
                                    <LoginForm callback={this.myCallback} />
                                </Col>
                                <Col
                                    sm={{ span: 6, offset: 3 }}
                                    md={{ span: 6, offset: 3 }}
                                    lg={{ span: 3, offset: 0 }}
                                    xs={{ span: 8, offset: 2 }}
                                >
                                    <SignupForm callback={this.myCallback} />
                                </Col>
                            </Row>
                        </Container>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard userFirstName={this.state.firstName} />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App;
