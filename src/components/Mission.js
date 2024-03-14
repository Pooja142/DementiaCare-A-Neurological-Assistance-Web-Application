import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dementia from "../Images/dementia.png";
import bg from "../Images/bg.png";
import tick from "../Images/tik.jpeg";
import Fab from "@mui/material/Fab";

function Mission() {
  return (
    <>
      <div style={{ backgroundImage: `url( ${bg})` }}>
        <h1
          style={{
            textAlign: "center",
            color: "#009A75",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          Our Mission
        </h1>
        <Row>
          <Col lg sm={12}>
            <MissionContent>
              <p style={{ marginTop: "100px", fontFamily: "400 heebo" }}>
                To ensure that our senior population will have the required
                support. Have a better quality to live the life they have earned
                and now deserve as our generation’s elders.
              </p>
              <ul
                style={{
                  marginTop: "100px",
                  listStyleImage: `url(${tick})`,
                  listStyle: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  fontFamily: "400 heebo",
                  fontSize: "10rm",
                }}
              >
                <li>Provide caregivers</li>
                <li>Periodic test</li>
                <li>Help family members</li>
              </ul>
              <div style={{ marginTop: "100px" }}>
                <Fab variant="extended" style={{ background: "#009A75" }}>
                  About Us
                </Fab>
              </div>
            </MissionContent>
          </Col>
          <Col>
            <center>
              <img
                src={dementia}
                alt="mission_img"
                className="img-fluid shadow-4"
              />
            </center>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Mission;

const MissionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 120px;
`;
