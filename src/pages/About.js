import React from "react";
import Ourteam from "../components/Ourteam";
import avatr from "../Images/Avatr.jpeg";
import Favatr from "../Images/FemaleAvatar.jpeg";
import Aboutimg from "../Images/start.png";
import Mission from "../Images/mission.png";
import Vision from "../Images/vision.png";
import bg from "../Images/vision_bg.png";
import { Row, Col, Container } from "react-bootstrap";
import AboutMiddle from "../components/AboutMiddle";

function About() {
  return (
    <>
      <div>
        <Row>
          <Col>
            <img
              className="img-fluid"
              src={Aboutimg}
              alt="aboutsrc"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        <div
          style={{
            postion: "relative",
            backgroundColor: "#009A75",
          }}
        >
          <div>
            <img
              src={Mission}
              alt="logo"
              style={{
                position: "absolute",
                top: "",
                right: "45px",
                marginTop: "-50px",
              }}
              height={100}
            />

            <h3
              style={{
                left: "30px",
                padding: "25px",
                color: "white",
              }}
            >
              <span
                style={{
                  padding: "2px",
                  color: "#4A0D66",
                }}
              >
                |
              </span>
              Mission :
            </h3>

            <center>
              <p
                style={{
                  textAlign: "center",
                  paddingBottom: "35px",
                  fontSize: "1.2rem",
                  width: "65vw",
                }}
              >
                To ensure that our senior population will have the required
                support. Have a better quality to live the life they have earned
                and now deserve as our generation’s elders.
              </p>
            </center>
          </div>
        </div>
        <AboutMiddle />
        <div
          style={{
            postion: "relative",
            backgroundColor: "#009A75",
          }}
        >
          <div style={{ backgroundImage: `url( ${bg})` }}>
            <img
              src={Vision}
              alt="logo"
              style={{
                position: "absolute",
                top: "",
                left: "45px",
                marginTop: "-50px",
              }}
              height={100}
            />
            <center>
              <h3
                style={{
                  padding: "25px",
                  color: "white",
                }}
              >
                <span
                  style={{
                    padding: "2px",
                    color: "#4A0D66",
                  }}
                >
                  |
                </span>
                VISION :
              </h3>
            </center>
            <center>
              <p
                style={{
                  textAlign: "center",
                  paddingBottom: "35px",
                  fontSize: "1.2rem",
                  width: "65vw",
                  color: "white",
                }}
              >
                To improve the lives of those who are dealing and living with
                the dementia.
              </p>
            </center>
          </div>
        </div>
      </div>
      <div style={{ padding: "25px" }}>
        <center>
          <h1 style={{ padding: "35px" }}>
            Meet Our<span style={{ color: "#009A75" }}> Team</span>
          </h1>
        </center>
        <Container>
          <Row>
            <Col>
              <Ourteam
                img={avatr}
                title="Ansari Azad Md Salim"
                des="Frontend and Backend Developer"
                social=""
              />{" "}
            </Col>
            <Col>
              <Ourteam
                img={Favatr}
                title="Sayed Zahra Abadi Jafar"
                des="Frontend and Backend Developer"
                social=""
              />{" "}
            </Col>
            <Col>
              <Ourteam
                img={avatr}
                title="Khan Haarish Irshad"
                des="Frontend and Backend Developer"
                social=""
              />{" "}
            </Col>
            <Col>
              <Ourteam
                img={Favatr}
                title="Rathod Pooja Shankar"
                des="Frontend and Backend Developer"
                social=""
              />
            </Col>
          </Row>
        </Container>

      </div>
    </>
  );
}

export default About;
