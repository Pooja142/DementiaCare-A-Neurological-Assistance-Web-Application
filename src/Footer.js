import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import logo from "./Images/header_logo.png";
import Fab from "@mui/material/Fab";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CallIcon from "@mui/icons-material/Call";
import PsychologyIcon from "@mui/icons-material/Psychology";
import InfoIcon from "@mui/icons-material/Info";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <>
      <DIV>
        <div>
          <center>
            <img src={logo} alt="logo" />
            <h1 style={{ color: "#4a0d66", fontStyle: "Kelly Slab" }}>
              DimentiCare
            </h1>
          </center>
        </div>

        <div>
          <h4 style={{ color: "#4A0D66" }}>Reach Us</h4>
          <Address>
            {" "}
            <li>
              {" "}
              <PinDropIcon />
              Mumbai, India - 400043
            </li>
            <li>
              {" "}
              <CallIcon style={{ color: "#009A75" }} /> +91 - 8369XXXXXX
            </li>
            <div>
              <Fab
                variant="extended"
                style={{
                  background: "#009A75",
                  marginTop: "20px",
                  marginLeft: "-32px",
                }}
              >
                Join Now
              </Fab>
            </div>
          </Address>
        </div>

        <div>
          <h4
            style={{
              // borderBottom: "2px solid #009a75",
              color: "#4A0D66",
            }}
          >
            Quick Links
          </h4>
          <ul
            style={{
              // borderBottom: "2px solid #009a75",
              paddingBottom: "10px",
              listStyle: "none",
            }}
          >
            <li>
              {" "}
              <HomeIcon style={{ color: "#009A75" }} />
              &nbsp; Home
            </li>
            <li>
              {" "}
              <InfoIcon style={{ color: "#009A75" }} /> &nbsp; About us
            </li>

            <li>
              {" "}
              <MiscellaneousServicesIcon style={{ color: "#009A75" }} />
              &nbsp; Services{" "}
            </li>
            <li>
              {" "}
              <PsychologyIcon style={{ color: "#009A75" }} /> &nbsp; Dementia
              talks
            </li>
            <li>
              <PermPhoneMsgIcon style={{ color: "#009A75" }} /> &nbsp; Contact
              Us
            </li>
          </ul>
        </div>
      </DIV>
      <Container>
        <Row>
          <Col
            style={{
              padding: "20px",
            }}
          >
            <div>
              <p>
                copyright © 2023 DementiCare | All Rights Reserved | Built by
                Group-13
              </p>
            </div>
          </Col>
          <Col
            md={{ offset: 2 }}
            style={{
              paddingTop: "10px",
            }}
          >
            <Social>
              <ul style={{ display: "flex", justifyContent: "space-around" }}>
                <li style={{ marginRight: "20px", listStyle: "none" }}>
                  <SocialIcon
                    network="twitter"
                    fgColor="#4A0D66"
                    bgColor="#ffff"
                  />
                </li>
                <li style={{ marginRight: "20px", listStyle: "none" }}>
                  <SocialIcon
                    network="facebook"
                    fgColor="#4A0D66"
                    bgColor="#ffff"
                  />
                </li>
                <li style={{ marginRight: "20px", listStyle: "none" }}>
                  <SocialIcon
                    network="instagram"
                    fgColor="#4A0D66"
                    bgColor="#ffff"
                  />
                </li>
                <li style={{ listStyle: "none" }}>
                  <SocialIcon
                    network="google"
                    fgColor="#4A0D66"
                    bgColor="#ffff"
                  />
                </li>
              </ul>
            </Social>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;

const DIV = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #009a75;
  border-top: 2px solid #4a0d66;
  padding: 32px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Address = styled.ul`
  padding: 18px;
  list-style: none;
`;

const Social = styled.div`
  display: flex;
  // flex-direction: column;
  position: relative;

  @media screen and (max-width: 960px) {
    // display: none;
  }
`;
