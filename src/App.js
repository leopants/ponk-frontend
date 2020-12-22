import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignupForm from "./components/Signupform/SignupForm";
import LoginForm from "./components/Loginform/LoginForm";
import Header from "./components/Header/Header";
import Calltext from "./components/CallText/Calltext";

function App() {
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
                                <LoginForm />
                            </Col>
                            <Col
                                sm={{ span: 6, offset: 3 }}
                                md={{ span: 6, offset: 3 }}
                                lg={{ span: 3, offset: 0 }}
                                xs={{ span: 8, offset: 2 }}
                            >
                                <SignupForm />
                            </Col>
                        </Row>
                    </Container>
                </Route>
                <Route path="/dashboard">
                    <h1>Dashboard</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
