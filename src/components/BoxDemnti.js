import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import logo from "../Images/logov.png";

function BoxDemnti({ im, title, des }) {
  return (
    <>
      <div
        style={{
          background: "#009A75",
          marginBottom: "50px",
          position: "relative",
          marginTop: "150px",
        }}
      >
        <Row>
          <Col md={6}>
            {" "}
            <img
              src={logo}
              alt="logo"
              style={{ position: "absolute", top: "-40px" }}
              height={100}
            />
            <div
              style={{
                padding: "33px",
                marginTop: "50px",
              }}
            >
              <h1
                style={{
                  padding: "33px",
                  color: "white",
                }}
              >
                {title}
              </h1>
              <p
                style={{
                  padding: "10px",
                  fontSize: "1.5rem",
                }}
              >
                {des}
              </p>
            </div>
          </Col>

          <Col md={6}>
            <Im className="img-fluid" src={im} alt="missionimg" />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default BoxDemnti;
const Im = styled.img`
  position: absolute;
  right: 100px;
  height: 450px;
  top: -35px;
  @media screen and (max-width: 1020px) {
    position: relative;
    right: -0px;
  }
`;
