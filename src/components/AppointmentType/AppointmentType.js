import React, { useState } from "react";
import Popup from "reactjs-popup";
import { Card } from "react-bootstrap";
import "./AppointmentType.css";
import { db } from "../../firebase";

const AppointmentType = (props) => {
  const [returnedData, setReturnedData] = useState(null);
  const [appointmentId, setAppointmentId] = useState(null);
  const { title, time, shortDetails } = props.appointmentData;
  const onSubmit = (event) => {
    event.preventDefault();
    const key = (length = 6) =>
      Math.random().toString(20).substr(2, length);
    const form = event.target;
    const data = {
      time: form.time.value,
      name: form.name.value,
      phoneNumber: form.phoneNumber.value,
      email: form.email.value,
      date: form.date.value,
    };
    const appointmentInfo = {
      title,
      key: key(),
      details: data,
      action: "notVisited",
      action1: "pending",
    };

    db.collection("appointments")
      .add(appointmentInfo)
      .then((docRef) => {
        setReturnedData(docRef);
        setAppointmentId(docRef.id); // <-- store the ID in a state variable
        form.reset();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
  
  
  
  return (
    <Card className="appointment-card">
      <Card.Body>
        <Card.Title className="appointment-title">{title}</Card.Title>
        <Card.Subtitle className="appointment-time">{time}</Card.Subtitle>
        <Card.Text className="appointment-details">
          <small>{shortDetails}</small>
        </Card.Text>
        <Popup
          trigger={
            <button className="appointment-button">BOOK APPOINTMENT</button>
          }
          contentStyle={{
            width: "600px",
            border: "none",
            background: "transparent",
          }}
          modal
          closeOnDocumentClick
        >
          <div className="popup-details">
            <h5>{title}</h5>
            <form onSubmit={onSubmit} className="appointment-form">
              <div className="form-group">
                <label htmlFor="time">Time:</label>
                <input
                  type="text"
                  name="time"
                  className="form-control"
                  placeholder="Time"
                  defaultValue={time}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="text"
                  name="phoneNumber"
                  className="form-control"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input
                  type="text"
                  name="date"
                  className="form-control"
                  placeholder="mm/dd/yyyy"
                  defaultValue={props.fullDate1}
                  required
                />
              </div>
              <div className="submit-button">
                <input type="submit" value="Send" className="btn btn-primary" />
              </div>
              {returnedData && (
  <div>
    <p>Your Appointment Id: {appointmentId}</p> 
    <a href="/">Go to Home Page</a>
  </div>
)}
            </form>
          </div>
        </Popup>
      </Card.Body>
    </Card>
  );
};

export default AppointmentType;
