import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Alert, Row, Col } from "react-bootstrap";
import logo from "../Images/header_logo.png";
import { Link } from "react-router-dom";

function Registration() {
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [date_of_birth, setDate_of_birth] = React.useState("");
  const [cnfm_password, setCnfm_password] = React.useState("");
  const [caretaker_relation, setCaretaker_relation] = React.useState("");
  const [doctor_name, setDoctor_name] = React.useState("");
  const [error, setError] = React.useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/auth/user/register/",
        {
          method: "POST",
            headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://643e818ec9c2244cf3230842--magical-hummingbird-ae5667.netlify.app"
        },
          body: JSON.stringify({
            email,
            name,
            gender,
            date_of_birth,
            password,
            cnfm_password,
            caretaker_relation,
            doctor_name,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        switch (response.status) {
          case 400:
            // Handle user already exists
            // setAlertMessage(
            //   "User already exists, please login or choose another email"
            // );
            console.log(
              "User already exists, please login or choose another email"
            );
            setShowAlert(true);
            break;
          case 201:
            // Handle Success

            setAlertMessage(" Successful registeration");
            console.log("Successful registeration");
            break;
          default:
            // Handle other status codes
            console.log("An error ocurred, status code: ", response.status);
        }
        throw new Error(data.message);
      }
      setAlertMessage(" Successful registeration");
      console.log("User registered successfully:", data);
    } catch (error) {
      setError(error.message);

      console.log("error:", error);
    }
  }

  return (
    <Row>
      <Col
        md={6}
        className="d-flex justify-content-center  align-items-center "
      >
        <img src={logo} alt="logo" className="img-fluid hover-shadow" />
      </Col>
      <Col md={6}>
        <div style={{ padding: "30px" }}>
          <Form onSubmit={handleSubmit}>
            <center>
              <h1 style={{ color: "#009A75", padding: "25px" }}>Register</h1>
            </center>
            <Row>
              <Col md={6}>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              {" "}
              <Col md={6}>
                {" "}
                <Form.Group>
                  <Form.Label>Gender:</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                    required
                  >
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                {" "}
                <Form.Group>
                  <Form.Label>Date of Birth:</Form.Label>
                  <Form.Control
                    type="rext"
                    name="date_of_birth"
                    placeholder="YYYY/MM/DD"
                    onChange={(e) => setDate_of_birth(e.target.value)}
                    value={date_of_birth}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label> Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="cnfm_password"
                    placeholder="Confirm Password"
                    onChange={(e) => setCnfm_password(e.target.value)}
                    value={cnfm_password}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>ID</Form.Label>
                  <Form.Control
                    type="text"
                    name="caretaker_relation"
                    placeholder="Id"
                    onChange={(e) => setCaretaker_relation(e.target.value)}
                    value={caretaker_relation}
                    required
                  />
                </Form.Group>
              </Col>{" "}
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>doctor_name</Form.Label>
                  <Form.Control
                    type="text"
                    name="doctor_name"
                    placeholder="doctor_name"
                    onChange={(e) => setDoctor_name(e.target.value)}
                    value={doctor_name}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <center>
              <Button style={{ background: "#009A75" }} type="submit">
                Register
              </Button>
            </center>
          </Form>
          {showAlert && (
            <Alert
              variant="danger"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              <Alert.Heading>Successful</Alert.Heading>
              <p>{alertMessage}</p>
            </Alert>
          )}
          <p
            style={{
              textAlign: "center",
              paddingTop: "10px",
            }}
          >
            <Link
              to="/Login"
              style={{
                color: "black",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Already have a account?{" "}
              <span style={{ color: "#009A75" }}>Login</span>
            </Link>
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default Registration;
