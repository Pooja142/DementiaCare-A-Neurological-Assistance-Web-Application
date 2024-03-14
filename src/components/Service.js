import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import services from "../Images/services_logo.png";
import services1 from "../Images/other-service_location-tracker_logo.png";
import services2 from "../Images/other-services_cognitive-test_logo.png";
import services3 from "../Images/other-services_personal-space_logo.png";
import services4 from "../Images/other-services_reminder_logo.png";
import Cardservice from "./Cardservice";
function Service() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "#4A0D66",
          marginTop: "160px",
          marginBottom: "40px",
        }}
      >
        OTHER SERVICES :
      </h1>
      <center>
        <Container>
          <Row style={{ marginBottom: "60px" }}>
            <Col>
              <p style={{ width: "400px", fontSize: "30px" }}>
                <span style={{ height: "100px", color: "#009A75" }}>|</span>Some
                of the things we provide
              </p>
            </Col>
            <Col>
              <img src={services} alt="service" height={100} />
            </Col>
          </Row>
          <Row direction="vertical" gap={3}>
            <Col md={12} lg={6}>
              <Cardservice
                one={services4}
                title="Reminder "
                des="To help the patients and caretakers by providing a reminder for particular events for patients as its hectic to remind it all."
              />
            </Col>

            <Col md={12} lg={6}>
              <Cardservice
                one={services1}
                title="Location Tracker"
                des="To keep track of patient location continuously 24/7 for their safety in case of lost or panic attacks."
              />
            </Col>
            <Col md={12} lg={6}>
              <Cardservice
                one={services3}
                title="Personal Space"
                des="For the patients to store their important or precious moments of their life as a pic with their name for future."
              />
            </Col>
            <Col md={12} lg={6}>
              <Cardservice
                one={services2}
                title="Cognitive Test"
                des="A periodic compulsory test for the patients to check for the condition, generating reports through it and recommending activites."
              />
            </Col>
          </Row>
        </Container>
      </center>
    </>
  );
}

export default Service;
