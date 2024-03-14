import React from "react";
import image1 from "../Images/image1.png";
import bg from "../Images/vision_bg.png";

import { Row, Col, Button } from "react-bootstrap";
import Brain from "../components/Brain";
import DementiaL from "../components/DementiaL";

function Dementiatalk() {
  const [show, setShow] = React.useState(true);
  return (
    <div>
      <Row>
        <Col>
          <div
            className="img-fluid  d-flex justify-content-center  align-items-center "
            style={{ backgroundImage: `url( ${image1})`, height: "500px" }}
          >
            <img
              className="img-fluid  d-flex justify-content-center  align-items-center "
              src={bg}
              alt="aboutsrc"
              style={{ height: "500px" }}
            />

            <div style={{ position: "absolute" }}>
              <h3 style={{ color: "white", fontSize: "5rem", padding: "10px" }}>
                A tour to understanding
              </h3>
              <center>
                <div style={{ padding: "25px" }}>
                  <Button
                    onClick={() => {
                      setShow(true);
                    }}
                    variant="outline-secondary"
                    style={{ marginRight: "25px" }}
                    size="lg"
                  >
                    Brain Basics
                  </Button>

                  <Button
                    onClick={() => {
                      setShow(false);
                    }}
                    variant="outline-secondary"
                    size="lg"
                    style={{ marginLeft: "25px" }}
                  >
                    Dementia
                  </Button>
                </div>
              </center>
            </div>
          </div>
        </Col>
      </Row>
      {show ? <Brain /> : <DementiaL />}
    </div>
  );
}

export default Dementiatalk;
