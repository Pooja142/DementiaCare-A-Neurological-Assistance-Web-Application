import { useState } from "react";
import { db } from "../firebase";
import { Modal, Button } from "react-bootstrap";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add form data to Firestore
      await db.collection("contactForm").add({
        email,
        subject,
        message,
      });

      // Reset form values after submission
      setEmail("");
      setSubject("");
      setMessage("");

      // Show modal after successful submission
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => setShowModal(false);

  return (
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
            <Modal.Body>Your form has been submitted successfully.</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
