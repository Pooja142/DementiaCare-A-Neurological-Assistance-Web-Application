import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>Are you sure you want to logout?</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
