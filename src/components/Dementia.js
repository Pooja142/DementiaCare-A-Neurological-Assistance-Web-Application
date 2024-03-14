import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import logo from "../Images/logov.png";
import mobile_application from "../Images/mobile_application_mockup.png";
import Fab from "@mui/material/Fab";
function Dementia() {
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
          <Col lg sm={12}>
            <MissionC>
              <img
                src={logo}
                alt="logo"
                style={{ position: "absolute", top: "-40px" }}
                height={100}
              />
              <h1
                style={{
                  color: "#0A1C41",
                  marginTop: "80px",
                  borderBottom: "2px solid  white",
                }}
              >
                DementiCare Mobile Application{" "}
              </h1>
              <p style={{ color: "white", marginTop: "20px" }}>
                A mobile application for patients care and caretaker’s help.
                Download now to enjoy the amazing features of our application.
              </p>
              <div style={{ marginTop: "40px", marginBottom: "20px" }}>
                <Fab
                  variant="extended"
                  style={{ background: "#4A0D66", color: "white" }}
                >
                  Download
                </Fab>
              </div>
            </MissionC>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <Im
              src={mobile_application}
              alt="missionimg"
              height={500}
              width={500}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dementia;

const Im = styled.img`
  position: absolute;
  bottom: 50px;
  right: 300px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const MissionC = styled.div`
  margin-left: 80px;
  @media screen and (max-width: 960px) {
    margin-left: 5px;
  }
`;
