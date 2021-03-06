// Christian is doing login
import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Col,
  Container,
  ButtonToolbar,
  FormGroup,
} from "react-bootstrap";
import { loginUser } from "../api";
import { storeToken, storeUser } from "../auth";
import { useHistory } from "react-router-dom";

const Login = ({ isLoggedIn, setIsLoggedIn, setUsername, username }) => {
  let history = useHistory();

  let [password, setPassword] = useState("");

  let loginForm = (
    <div className="bg-image">
      <div className="mask">
        <Container>
          <Col className="text-white" md={{ span: 4, offset: 4 }}>
            <h2>
              {" "}
              <b className="row justify-content-center"> Login Form </b>{" "}
            </h2>
            <br></br>
            <br></br>
            <Form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  const { data } = await loginUser(username, password);
                  setUsername("");
                  setPassword("");
                  setIsLoggedIn(true);
                } catch (error) {
                  console.log(error.message);
                } finally {
                  setIsLoggedIn(true);
                  history.push("/Profile");
                }
              }}
            >
              <Form.Group className="mb-4" controlId="formBasicUsername">
                <Form.Label> Username </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="usernames"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label> Enter Password </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </Form.Group>
              <ButtonToolbar className="mb-3">
                <Button variant="primary" type="submit">
                  Login
                </Button>
                <Button
                  variant="secondary"
                  type="submit"
                  onClick={(e) => {
                    history.push("/Register");
                  }}
                >
                  Don't have an account?
                </Button>
              </ButtonToolbar>
            </Form>
          </Col>
          <br /> <br /> <br /> <br /> <br />
        </Container>
      </div>
    </div>
  );

 

  let logoutButton = (
    <div className="bg-image ">
      <div className="mask">
        <Container className="text-center">
          <br /> <br /> <br /> <br /> <br />
          <ButtonToolbar className="mb-2">
            <Button
              variant="primary"
              onClick={() => {
                setIsLoggedIn(false);
                setUsername("");
                setPassword("");
                history.push("/Login");
              }}
            >
              Logout
            </Button>
          </ButtonToolbar>
        </Container>
      </div>
    </div>
  );
  return isLoggedIn ? logoutButton : loginForm;
};

export default Login;
