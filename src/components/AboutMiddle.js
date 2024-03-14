import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../Images/header_logo.png";
import bg from "../Images/bg.png";
import avtar from "../Images/dementicare-avatar.png";
function AboutMiddle() {
  return (
    <div
      style={{
        margin: "25px",
        backgroundImage: `url( ${bg})`,

        position: "relative",
      }}
    >
      <img src={avtar} alt="avtar" style={{ position: "absolute", right: 0 }} />
      <h3 style={{ textAlign: "center", padding: "30px" }}>DementiCare</h3>
      <Row>
        <Col
          md={6}
          className="d-flex justify-content-center  align-items-center "
        >
          <img
            className="img-fluid"
            src={logo}
            alt="logo"
            height={400}
            width={400}
          />
        </Col>
        <Col md={6}>
          <p
            style={{
              marginRight: "35px",
              padding: "25px",
              fontSize: "25px",
              opacity: "0.7",
            }}
          >
            {" "}
            A mobile application and a web app for the PLWD, family member,
            caretakers and also caregivers.
          </p>
          <ul
            style={{
              fontSize: "25px",
              marginLeft: "85px",
              opacity: "0.7",
              padding: "25px",
            }}
          >
            <li>
              For the better of society and to solve the rapidly increasing
              problem in senior’s across the world.{" "}
            </li>
            <li>Enhancing public knowledge and understanding of dementia.</li>
            <li>
              Improvement in the care and support for those living with
              dementia.{" "}
            </li>
            <li>Provide employment for the people who work as a caretaker.</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default AboutMiddle;
