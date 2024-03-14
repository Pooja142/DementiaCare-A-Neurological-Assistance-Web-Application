import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import one from "../Images/carousel-1.png";
import two from "../Images/carousel-2.png";
import styled from "styled-components";
import Fab from "@mui/material/Fab";
import { Link } from "react-router-dom";
function CarouselHome() {
  return (
    <Carousel
      showThumbs={false}
      // autoPlay={true}
      interval="3000"
      transitionTime="3000"
      stopOnHover={true}
    >
      <div>
        <img src={one} alt="CarouselImg1" />
        <Legend>
          <Span>Until All The Pieces Fit</Span>
          Dementia has no cure but we can prevent it and also help the people
          who care for their people and also those are dealing with it!
        </Legend>
      </div>
      <div>
        <img src={two} alt="CarouselImg2" />
        <Legend2>
          <Span2>Memories Matter</Span2>
          Care for people who are dealing with dementia and help them.
        </Legend2>
        <Buttom>
          <Fab variant="extended" style={{ background: "#009A75" }}>
            <Link
              to="/Register"
              style={{ color: "black", textDecoration: "none" }}
            >
              Join Now
            </Link>
          </Fab>
        </Buttom>
      </div>
    </Carousel>
  );
}

export default CarouselHome;
const Buttom = styled.button`
  position: absolute;

  bottom: 150px;
  right: 350px;
  background: transparent;
  border: none;
  @media screen and (max-width: 960px) {
    position: absolute;
    right: 300px;
    bottom: 80px;
  }
  @media screen and (max-width: 700px) {
    position: absolute;
    right: 100px;
    bottom: 80px;
  }
  @media screen and (max-width: 400px) {
    position: absolute;
    right: 80px;
    bottom: 10px;
    width: 20px;
  }
`;
const Legend = styled.p`
  position: absolute;
  bottom: 150px;
  font-family: Public Sans;
  font-weight: 400;
  font-size: 40px;
  width: 800px;
  right: 0px;
  @media screen and (max-width: 960px) {
    position: absolute;
    right: 0px;
    bottom: 60px;
    font-size: 30px;
  }
  @media screen and (max-width: 700px) {
    position: absolute;
    right: 0px;
    bottom: 60px;
    color: red;
    font-size: 20px;
    width: 300px;
  }
  @media screen and (max-width: 400px) {
    position: absolute;
    bottom: 30px;
    font-size: 15px;
    right:30px
    width: 150px;
  }
`;
const Span = styled.span`
  position: absolute;
  bottom: 170px;
  left: 150px;
  color: #621287;
  font-family: heebo;
  font-size: 60px;
  @media screen and (max-width: 960px) {
    position: absolute;
    right: 0px;
    font-size: 40px;
    bottom: 150px;
  }
  @media screen and (max-width: 700px) {
    position: absolute;

    bottom: 80px;
    font-size: 20px;
    right:30px
    width: 200px;
  }
  @media screen and (max-width: 400px) {
    position: absolute;
    bottom: 60px;
    font-size: 15px;
    right:30px
  
    width: 150px;
  }
`;
const Legend2 = styled.p`
  position: absolute;
  bottom: 190px;
  font-family: Public Sans;
  font-weight: 400;
  font-size: 40px;
  width: 800px;
  right: 0px;
  @media screen and (max-width: 960px) {
    position: absolute;
    right: 0px;
    bottom: 130px;
    font-size: 30px;
  }
  @media screen and (max-width: 700px) {
    position: absolute;
    right: 0px;
    bottom: 130px;
    color: red;
    font-size: 20px;
    width: 300px;
  }
  @media screen and (max-width: 400px) {
    position: absolute;
    bottom: 30px;
    font-size: 15px;
    right:30px
    width: 150px;
  }
`;
const Span2 = styled.span`
  position: absolute;
  bottom: 120px;
  left: 150px;
  color:white;
  font-family: heebo;
  font-size: 60px;
  @media screen and (max-width: 960px) {
    position: absolute;
    right: 0px;
    font-size: 40px;
    bottom: 80px;
  }
  @media screen and (max-width: 700px) {
    position: absolute;

    bottom: 60px;
    font-size: 20px;
    right:30px
    width: 200px;
  }
  @media screen and (max-width: 400px) {
    position: absolute;
    bottom: 60px;
    font-size: 15px;
    right:30px
  
    width: 150px;
  }
`;
