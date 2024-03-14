import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn)
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/auth/user/login/", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          // Handle Successful login
          console.log("Successful login");
          return response.json();
        } else if (response.status === 401) {
          // Handle Unauthorized
          // setIsLoggedIn(true);
          setAlertMessage("Invalid email or password");
          setShowAlert(true);
        } else {
          console.log("An error occurred, status code:- ", response.status);
        }
      })
      .then((data) => {
        if (data && data.token) {
          // Store token in local storage
          // localStorage.setItem('token', JSON.stringify({ access_token: 'your_token_here' }));
          localStorage.setItem("isLoggedIn", JSON.stringify(true));
          localStorage.setItem("token", JSON.stringify(data.token));
          setIsLoggedIn(false);
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <div style={{ padding: "30px" }}>
      <center>
        <h1 style={{ color: "#009A75" }}>Authentication</h1>
      </center>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          {isLoggedIn ? (
            <div style={{ textAlign: "center" }}>
              <h3>You are logged in!</h3>
              <Button
                style={{ background: "#009A75" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              <div style={{ padding: "10px", textAlign: "center" }}>
                <Button style={{ background: "#009A75" }} type="submit">
                  Login
                </Button>
              </div>
              {/* <p>password</p> */}
            </Form>
          )}
        </Col>
      </Row>
      {showAlert && (
        <Alert
          variant="danger"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <Alert.Heading>Error</Alert.Heading>
          <p>{alertMessage}</p>
        </Alert>
      )}

      {!isLoggedIn && (
        <p
          style={{
            textAlign: "center",
            paddingTop: "10px",
          }}
        >
          <Link
            to="/Register"
            style={{
              color: "black",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Don't have an account?{" "}
            <span style={{ color: "#009A75" }}>Register</span>
          </Link>
        </p>
      )}
    </div>
  );
}