import React from "react";
import { Nav, Card } from "react-bootstrap";
import "./MainPage.css";
import image from "../../image/bgimg.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import brain1 from "../../image/brain1.png";
import brain2 from "../../image/brain2.png";
import brain from "../../image/brain.png";
import doc from "../../image/doc.webp";
import { Button } from "@material-ui/core";
import bgRemoveDoctor from "../../image/doc1.png";
import ellips1 from "../../image/Elipse 1.jpg";
import ellips2 from "../../image/Elipse 2.jpg";
import ellips3 from "../../image/Elipse 3.webp";
import ellips4 from "../../image/Elipse 4.png";
import drImage from "../../image/dr-image.png";
import drImage1 from "../../image/dr-image1.png";
import drImage3 from "../../image/dr-image3.png";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { db } from "../../firebase";
const MainPage = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add form data to Firestore
      await db.collection("contactForm").add({
        email,
        subject,
        message,
        //   createdAt: db.firestore.FieldValue.serverTimestamp(),
      });

      // Reset form values after submission
      setEmail("");
      setSubject("");
      setMessage("");
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="doctorPortal">
      <div className="doctorHeading">
        <div className="doctorNav">
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link className="navLink" href="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" href="/dashboard">
                Doctors Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" href="/contactUs">
                Contact Us
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="row mainBody">
          <div className="col-md-5">
            <div className="doctorText">
              <h1>
                We care for you
                <br />
                Inside and out!
              </h1>
              <br />
              <p>
                Mental health and wellbeing is as important as physical health
                and wellbeing. The better they feel, the better life will be for
                them and those around them.
              </p>
              <Link style={{ textDecoration: "none" }} to="/Appointment">
                <Button className="button">BOOK APPOINTMENT</Button>
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <div className="doctorImg">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="publicServices">
        <div>
          <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
          <div>
            <p>Visit Us</p>
            <small>India </small>
          </div>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faClock} />
          <div>
            <p>Opening Hours</p>
            <small>
              Always ready to
              <br />
              serve you.
            </small>
          </div>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
          <div>
            <p>24/7 Helpline</p>
            <small>+91 9769694770</small>
          </div>
        </div>
      </div>
      <div className="ourServices">
        <div>
          <p>WE PROVIDE</p>
          <h2>Our Treatments Are Given Below</h2>
          <div className="servicesDetails">
            <div>
              <img src={brain2} alt="" />
              <p>Brain Training</p>
              <p>
                Doctors will evaluate your thinking ability. A number of tests
                measure thinking skills, such as memory, orientation, reasoning
                and judgment, language skills, and attention.
              </p>
            </div>
            <div>
              <img src={brain1} alt="" />
              <p>Brain scans</p>
              <p>
                These can show patterns of brain activity and whether the
                amyloid or tau protein, hallmarks of dementia disease, have been
                deposited in the brain.
              </p>
            </div>
            <div>
              <img src={brain} alt="" />
              <p>Occupational Therapy</p>
              <p>
                An occupational therapist can show you how to make your home
                safer and teach coping behaviors. The purpose is to manage
                behavior and prepare you for the dementia progression.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="doc">
        <div>
          <div>
            <img src={doc} alt="" />
          </div>
          <div>
            <div>
              <h1>
                Diagnosis & Treatment
                <br />
                for Dementia Patients
              </h1>
              <p>
                If you’re concerned about changes in memory, thinking, behavior,
                or mood, in yourself or someone you care about, contact the
                primary care physician. Because it is so difficult to diagnose
                dementia, you may want to get a second opinion. Don’t worry
                about offending the specialist. Taking part in a clinical trial
                may be an option worth your consideration. Start your research
                Today.
              </p>
              <Button className="button">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="makeAppointment">
        <div>
          <img src={bgRemoveDoctor} alt="" />
        </div>
        <div>
          <h4>APPOINTMENT</h4>
          <h1>
            Make an Appointment <br />
            Today
          </h1>
          <p>
            When facing Dementia or another Alzheimer's diseases, there are a
            lot of things to consider. Your doctor will evaluate your overall
            health and identify how well your mind is working. We can help you
            figure out your next steps.{" "}
          </p>
          <Button className="button">LEARN MORE</Button>
        </div>
      </div>
      <div className="reviews">
        <div>
          <h4>Reviews</h4>
          <h1>
            Know What Our Patients <br />
            Recommends
          </h1>
          <div className="reviewsDetails">
            <Card
              style={{
                width: "21rem",
                border: "none",
                boxShadow: "5px 5px 10px lightGray",
              }}
            >
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Text>
                  This organization has many members across the country who
                  provide services to seniors. Considering management in the
                  context of trying to understand the experience and
                  perspectives towards dementia, their doctors will provide the
                  best care.
                </Card.Text>
              </Card.Body>
              <Card.Header style={{ border: "none", display: "flex" }}>
                <img src={ellips4} alt="" />
                <div className="patientinfo">
                  <p>Jatin Sharma</p>
                  <p>Kolkata</p>
                </div>
              </Card.Header>
            </Card>
            <Card
              style={{
                width: "21rem",
                border: "none",
                boxShadow: "5px 5px 10px lightGray",
              }}
            >
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Text>
                  One of the best thing is the doctors are focusing on diagnosis
                  and disclosure, supports and community resources, information
                  sharing, disease management, and attitudes and communication
                  skills.
                </Card.Text>
              </Card.Body>
              <Card.Header style={{ border: "none", display: "flex" }}>
                <img src={ellips3} alt="" />
                <div className="patientinfo">
                  <p>Shreya Thakur</p>
                  <p>Mumbai</p>
                </div>
              </Card.Header>
            </Card>
            <Card
              style={{
                width: "21rem",
                border: "none",
                boxShadow: "5px 5px 10px lightGray",
              }}
            >
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Text>
                  The clinics and centers, have teams of specialists who work
                  together to diagnose the problem. They are providing best
                  services and are making the process smooth and simple. The
                  doctors are co-ordinating really well.
                </Card.Text>
              </Card.Body>
              <Card.Header style={{ border: "none", display: "flex" }}>
                <img src={ellips4} alt="" />
                <div className="patientinfo">
                  <p>Akhil Nene</p>
                  <p>New Delhi</p>
                </div>
              </Card.Header>
            </Card>
          </div>
        </div>
      </div>
      <div className="ourBlog">
        <div>
          <h4>Know More About Us</h4>
          <h1>Our Key Suggestions</h1>
          <div className="ourBlogDetails">
            <Card
              style={{
                width: "21rem",
                border: "none",
                boxShadow: "5px 5px 10px lightGray",
              }}
            >
              <Card.Body>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "-5px",
                  }}
                >
                  Swastik Shah
                </p>
                <p>16 Nov 2022</p>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginTop: "30px",
                  }}
                >
                  Visit at least a doctor in a <br />
                  month for your memory health.
                </p>
                <FontAwesomeIcon
                  style={{ fontSize: "30px", marginTop: "50px" }}
                  icon={faLongArrowAltRight}
                />
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "21rem",
                border: "none",
                boxShadow: "5px 5px 10px lightGray",
              }}
            >
              <Card.Header style={{ border: "none", display: "flex" }}>
                <img src={ellips1} alt="" />
                <div className="doctorinfo">
                  <p>Dr. Rakesh Negi</p>
                  <p>16 Nov 2022</p>
                </div>
              </Card.Header>
              <Card.Body>
                <p style={{ fontSize: "20px", fontWeight: "700" }}>
                  Establish a healthy routine <br />
                  keep you alert and refreshed
                </p>
                <Card.Text>
                  Allow some flexibility for spontaneous activities or
                  particularly difficult days. Allow time for breaks during
                  tasks!
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "21rem",
                border: "none",
                boxShadow: "5px 5px 10px lightGray",
              }}
            >
              <Card.Header style={{ border: "none", display: "flex" }}>
                <img src={ellips2} alt="" />
                <div className="doctorinfo">
                  <p>Dr. Sayesha Shaikh</p>
                  <p>16 Nov 2022</p>
                </div>
              </Card.Header>
              <Card.Body>
                <p style={{ fontSize: "20px", fontWeight: "700" }}>
                  Be flexible and get involved
                  <br />
                  in several activities
                </p>
                <Card.Text>
                  Over time, a person with dementia becomes more dependent. To
                  reduce frustration, adapt your routine and expectations as
                  needed!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="ourDoctors">
        <div>
          <h4>Our Specialists</h4>
          <div className="ourDoctorsDetails">
            <Card style={{ width: "21rem", border: "none" }}>
              <img style={{ height: "300px" }} src={drImage1} alt="" />
              <div className="doctorsInfo">
                <p>Dr. Trupti Desai</p>
                <p>
                  <FontAwesomeIcon icon={faPhoneAlt} /> +91 9769695884
                </p>
              </div>
            </Card>
            <Card style={{ width: "21rem", border: "none" }}>
              <img style={{ height: "300px" }} src={drImage} alt="" />
              <div className="doctorsInfo">
                <p>Dr. Aashish Mohan</p>
                <p>
                  <FontAwesomeIcon icon={faPhoneAlt} /> +88 8828556486
                </p>
              </div>
            </Card>
            <Card style={{ width: "21rem", border: "none" }}>
              <img style={{ height: "300px" }} src={drImage3} alt="" />
              <div className="doctorsInfo">
                <p>Dr. Liza Azlert</p>
                <p>
                  <FontAwesomeIcon icon={faPhoneAlt} /> +79 938164898
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="contactUs">
        <div>
          <h4>Contact Us</h4>
          <h1>Always contact with us</h1>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="contactUsDetails">
                <div>
                  <input
                    placeholder="Email Address*"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <br />
                  <input
                    placeholder="Subject*"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                  <br />
                  <input
                    placeholder="Your Message*"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <br />
                  <Button className="submitBtn" type="submit">
                    Submit
                  </Button>
                </div>
              </div>
            </form>

            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Success!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Your form has been submitted successfully.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainPage;
