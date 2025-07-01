import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about-us-container">
      <header className="about-header">
        <h1>Our Story</h1>
        <p className="subtitle">Discover the passion behind PageTurner</p>
      </header>

      <section className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            PageTurner is an independent bookstore founded in [Year] with a
            simple mission: to connect readers with books they'll love and
            create a welcoming space for the community to explore the world of
            literature.
          </p>
        </div>

        <div className="about-section">
          <h2>Our History</h2>
          <p>
            What began as a small shop with just a few shelves in Cairo, Egypt
            has grown into a beloved two-story literary hub with over 50,000
            titles and a dedicated events space, while maintaining our
            commitment to personalized service. Despite our growth, we've
            maintained our commitment to personalized service and carefully
            curated selections.
          </p>
          <div className="timeline">
            <div className="timeline-item">
              <h3>2020</h3>
              <p>Opened our first location on Main Street</p>
            </div>
            <div className="timeline-item">
              <h3>2023</h3>
              <p>Launched our online store to reach readers nationwide</p>
            </div>
            <div className="timeline-item">
              <h3>2025</h3>
              <p>Expanded to include a cozy café for book lovers</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Philosophy</h2>
          <p>
            We believe bookstores should be more than just places to buy
            books—they should be community hubs that foster a love of reading.
            Our knowledgeable staff reads extensively so we can make thoughtful
            recommendations for every type of reader.
          </p>
        </div>

        <div className="about-section team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src={"/aboutUs/Founder.jpg"} alt="Sarah Johnson" className="member-image" />
              </div>
              <h3>Ahmed Eid</h3>
              <p>Founder & Head Buyer</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={"/aboutUs/Manager.jpg"} alt="Sarah Johnson" className="member-image" />
              </div>
              <h3>Michael Chen</h3>
              <p>Store Manager</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={"/aboutUs/Children's_Specialist.jpg"} alt="Sarah Johnson" className="member-image" />
              </div>
              <h3>Emily Rodriguez</h3>
              <p>Children's Specialist</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Visit Us</h2>
          <p>
            Come browse our shelves at Nasr City, Cairo or explore our online
            collection. We host regular author events, book clubs, and
            children's story hours—check our events calendar for details!
          </p>
          <Link to="/contact" className="contact-button">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
