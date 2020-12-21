import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import SignupForm from "./components/Signupform/SignupForm";
import LoginForm from "./components/Loginform/LoginForm";
import Header from "./components/Header/Header";
import Calltext from "./components/CallText/Calltext";

function App() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Calltext />
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ span: 2, offset: 3 }}>
                        <LoginForm />
                    </Col>
                    <Col sm={{ span: 2, offset: 2 }}>
                        <SignupForm />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
