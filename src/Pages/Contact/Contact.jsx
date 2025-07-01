import { useState } from "react";
import "./Contact.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmissionStatus('success');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // In a real app, you might want to handle errors too
  };
    return ( 
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out with questions, suggestions, or just to say hello.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Our Store</h2>
          
          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h3>Address</h3>
              <p>123 Bookworm Lane<br />Nasr City, LC 12345</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div>
              <h3>Phone</h3>
              <p>(010) 9288-7320</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h3>Email</h3>
              <p>ahmedgebrel101@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div>
              <h3>Hours</h3>
              <p>Monday-Friday: 9am - 8pm<br />
              Saturday: 10am - 9pm<br />
              Sunday: 11am - 6pm</p>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
              <a href="https://x.com/"><i className="fab fa-x"></i></a>            
              <a href="https://web.telegram.org/a/"><i className="fab fa-telegram"></i></a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          {submissionStatus === 'success' && (
            <div className="success-message">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215151618207!2d-73.9878449241641!3d40.74844097138987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629926786588!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    );
}
 
export default Contact;