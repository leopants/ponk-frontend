import React from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container'
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
        .get("https:ponk-backend.herokuapp.com/checkuser", {
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

    event.preventDefault();
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <label>
                User Name or Email: 
                <input
                  name="usernameOrEmail"
                  type="text"
                  value={usernameOrEmail}
                  onChange={(e) => setusernameOrEmail(e.target.value)}
                  required
                />
              </label>
              <br />

              <label>
                Password: 
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <br />
              <button>Submit</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
