import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import ".././App.css";
function Cardservice({ one, title, des }) {
  return (
    <>
      <Card
        className="card"
        style={{ width: "", height: "15rem", marginBottom: "132px" }}
      >
        <Card.Body>
          <Im src={one} alt={"images_services"} />
          <Card.Subtitle className="mb-2 text-muted">
            <h2 style={{ color: "#009A75" }}>{title}</h2>
          </Card.Subtitle>
          <Card.Text>{des}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cardservice;
const Im = styled.img`
  position: relative;
  left: 0px;
  margin-top: -60px;
  @media screen and (max-width: 960px) {
  }
`;
