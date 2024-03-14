import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
function Doctor() {
  const [formData, setFormData] = useState({
    rating: "",
    exp: "",
  });

  const [recommendedDoctors, setRecommendedDoctors] = useState([]);
  const [doctorContacts, setDoctorContacts] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/recommend", {
        rating: parseInt(formData.rating),
        exp: parseInt(formData.exp),
      });
      setRecommendedDoctors(response.data.data.recommended_doctors);
      setDoctorContacts(response.data.data.contacts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  };

  return (
<><Link to="/quiz">
    <BsArrowLeft /> Back
  </Link>
    <Row className="justify-content-md-center mt-5">
      <Col md={6}>
        <h3 className="text-center mb-4" style={{color:"#19D3AE"}}>Find a Recommended Doctor</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formRating">
            <Form.Label>Rating:</Form.Label>
            <Form.Control
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formExperience">
            <Form.Label>Experience:</Form.Label>
            <Form.Control
              type="number"
              name="exp"
              value={formData.exp}
              onChange={handleChange}
            />
          </Form.Group>
          <br></br>
          <center>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </center>
        </Form>

        {recommendedDoctors.length > 0 && doctorContacts.length >= 0 && (
          <Row className="mt-4">
            <Col>
              <ListGroup>
                <ListGroup.Item  variant="success" >Recommended Doctors:</ListGroup.Item>
                {recommendedDoctors.map((doctor, index) => (
                  <ListGroup.Item key={index}>{doctor}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col>
              <ListGroup>
                <ListGroup.Item variant="success">Contact:</ListGroup.Item>
                {doctorContacts.map((contact, index) => (
                  <ListGroup.Item key={index}>{contact}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
    </>
  );
}

export default Doctor;
