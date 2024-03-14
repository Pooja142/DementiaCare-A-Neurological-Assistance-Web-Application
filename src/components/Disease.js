import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import logo from "../Images/logov.png";
import missionim from "../Images/mission_im.png";
import Fab from "@mui/material/Fab";
function Disease() {
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
              <h1 style={{ color: "#0A1C41", marginTop: "80px" }}>
                Understanding Dementia Disease{" "}
              </h1>
              <p style={{ color: "white", marginTop: "20px" }}>
                Dementia is the loss of cognitive functioning of thinking,
                remembering and reasoning such that it interferes with a
                person's daily life and activities.
              </p>
              <div style={{ marginTop: "40px", marginBottom: "20px" }}>
                <Fab variant="extended" style={{ background: "#4A0D66" }}>
                  About Us
                </Fab>
              </div>
            </MissionC>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <Col>
              <Im src={missionim} alt="missionimg" height={400} />
            </Col>
            <Col>
              {" "}
              <DLink style={{ background: "white" }}>
                <h3
                  style={{
                    color: "#4A0D66",
                    borderBottom: "2px solid #009A75",
                  }}
                >
                  Quick Links
                </h3>
                <ul
                  style={{
                    color: "#4A0D66",
                    padding: "20px",
                    fontSize: "120%",
                  }}
                >
                  <li style={{ padding: "10px" }}>
                    What is Dementia Disease ?{" "}
                  </li>
                  <li style={{ padding: "10px" }}>Stages of Dementia</li>
                  <li style={{ padding: "10px" }}>Symptoms of Dementia</li>
                  <li style={{ padding: "10px" }}>Support to Try</li>
                </ul>
              </DLink>
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Disease;

const DLink = styled.div`
  position: absolute;

  top: 150px;
  width: 300px;
  height: 300px;
  font-family: heebo;
  padding: 20px;

  @media screen and (max-width: 960px) {
    position: relative;
    width: 100%;
  }
`;
const Im = styled.img`
  position: absolute;
  bottom: 100px;
  right: 350px;
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
