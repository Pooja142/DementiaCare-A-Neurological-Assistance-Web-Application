import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../Images/header_logo.png";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <>
      <div>
        <Nav>
          <Logo>
            <>
              <img src={logo} alt="logo" height={60}></img>
              <h1 style={{ marginLeft: "30px" }}>DimentiCare</h1>
            </>
          </Logo>
          <NavItem>
            <li style={{ marginRight: "80px" }}>
              <Link
                to="/About"
                style={{ color: "black", textDecoration: "none" }}
              >
                About Us
              </Link>
            </li>

            <li style={{ marginRight: "80px" }}>
              <Link
                to="/contactUs"
                style={{ color: "black", textDecoration: "none" }}
              >
                Contact-Us
              </Link>
            </li>
            <li style={{ marginRight: "80px" }}>
              <Link
                to="/help"
                style={{ color: "black", textDecoration: "none" }}
              >
                Help
              </Link>
            </li>
          </NavItem>
          {isLoggedIn ? (
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          ) : (
            <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
          )}

          <Social>
            <ul style={{ display: "flex", justifyContent: "space-around" }}>
              <li style={{ marginRight: "20px", listStyle: "none" }}>
                <SocialIcon
                  network="twitter"
                  fgColor="#009A75"
                  bgColor="#ffff"
                />
              </li>
              <li style={{ marginRight: "20px", listStyle: "none" }}>
                <SocialIcon
                  network="facebook"
                  fgColor="#009A75"
                  bgColor="#ffff"
                />
              </li>
              <li style={{ marginRight: "20px", listStyle: "none" }}>
                <SocialIcon
                  network="instagram"
                  fgColor="#009A75"
                  bgColor="#ffff"
                />
              </li>
              <li style={{ listStyle: "none" }}>
                <SocialIcon
                  network="google"
                  fgColor="#009A75"
                  bgColor="#ffff"
                />
              </li>
            </ul>
          </Social>
        </Nav>
      </div>
    </>
  );
};

export default HeaderNav;
const LogoutButton = styled.button`
  background-color: #009a75;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #007f5f;
  }
`;
const LoginButton = styled.button`
  background-color: #009a75;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #00755e;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: Kelly Slab;
`;
const NavItem = styled.ul`
  display: flex;
  justify-content: space-around;
  font-family: Calibri;
  font-weight: 300;
  list-style: none;
  font-size: 25px;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const Social = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
