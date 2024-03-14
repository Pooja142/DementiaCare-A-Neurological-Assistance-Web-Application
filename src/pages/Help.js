import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Help.css';

const Help = () => {
  return (
    <div className="help-container">
      <h2 className="help-title">Need help?</h2>
      <p className="help-text">If you need any assistance or have any questions about using our app, please contact our support team at:</p>
      <div className="help-info">
        <div className="help-info-item">
          <FaEnvelope className="help-icon" />
          <span className="help-label">Email:</span>
          <span className="help-value">support@dementiacare.com</span>
        </div>
        <div className="help-info-item">
          <FaPhone className="help-icon" />
          <span className="help-label">Phone:</span>
          <span className="help-value">7498002419</span>
        </div>
      </div>
      <div className="help-message">
        <p className="help-message-text">We are always here to help!</p>
        <Link to="/contactUs" className="help-message-btn">Contact Us</Link>
      </div>
    </div>
  );
};

export default Help;
