import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [cnfm_password, setCnfm_password] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== cnfm_password) {
      setErrorMessage("Passwords do not match");
      return;
    } else {
      setErrorMessage("");
    }

    try {
      const token = JSON.parse(localStorage.getItem("token"));
      console.log(token.access);
      const response = await fetch(
        "http://localhost:8000/auth/user/changepassword/",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.access}`,
          },

          body: JSON.stringify({
            password,
            cnfm_password,
          }),
        }
      );
      if (!response.ok) {
        setErrorMessage("Password change failed");
        return;
      }

      setPassword("");
      setCnfm_password("");
    } catch (error) {
      setErrorMessage("Password change failed");
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={cnfm_password}
                onChange={(event) => setCnfm_password(event.target.value)}
              />
            </Form.Group>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <Button variant="primary" type="submit">
              Change Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePassword;
