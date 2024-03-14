import React from "react";
import Cards from "../components/Cards";
import card1 from "../Images/card1_image.png";
import card2 from "../Images/card2_image.png";
import card3 from "../Images/card3_image.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselHome from "../components/CarouselHome";
import Mission from "../components/Mission";
import Disease from "../components/Disease";
import Service from "../components/Service";
import Dementia from "../components/Dementia";
export const Home = () => {
  return (
    <>
      <div>
        <CarouselHome />
        <h1
          style={{
            textAlign: "center",
            color: "#009A75",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          Services Provided
        </h1>
      </div>

      <div>
        <Row className="justify-content-md-center ">
          <Col sm={12} lg="3">
            <Cards
              c={card1}
              title="BEHAVIOUR TRACKER"
              des="To keep track of the patient daily routine and provide them a visual on daily, weekly and monthly basis."
            />
          </Col>
          <Col sm={12} lg="3">
            <Cards
              c={card2}
              title="CAREGIVER CORNER"
              des="To provide an employement for the people who works as the caregiver to take care of the dementia patients."
            />
          </Col>
          <Col sm={12} lg="3">
            <Cards
              c={card3}
              title="BEHAVIOUR TRACKER"
              des="Online reviews by the doctors for the patient conditions. Reducing the cost of visiting to the doctors everytime."
            />
          </Col>
        </Row>
      </div>
      <Mission />
      <Disease />
      <Service />
      <Dementia />
    </>
  );
};
