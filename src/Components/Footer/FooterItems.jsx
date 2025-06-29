import { Link } from "react-router-dom";

const FooterItems = () => {
  return (
    <div className="footer-items-wrapper">
      <div className="footer-items">
        <h3 className="footer-item-title">Usefull Links</h3>
        <ul className="footer-item-links">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/authors" className="footer-link">
            Authors
          </Link>
          <Link to="/about" className="footer-link">
            About Us
          </Link>
          <Link to="/contact" className="footer-link">
            Contact Us
          </Link>
          <Link to="/register" className="footer-link">
            Register
          </Link>
        </ul>
      </div>

      <div className="footer-items">
        <h3 className="footer-item-title">Contact Information</h3>
        <div className="footer-item-contact-wrapper">
          <div className="footer-item-contact">
            <i className="bi bi-geo-alt-fill"></i>
            Egypt, Cairo, Nasr City
          </div>
          <div className="footer-item-contact">
            <i className="bi bi-telephone-fill"></i>
            010-9288-7320
          </div>
          <div className="footer-item-contact phone-contact">
            <i className="bi bi-envelope-fill"></i>
            ahmedgebrel101@gmail.com
          </div>
        </div>
      </div>

      <div className="footer-items">
        <h3 className="footer-item-title">About Us</h3>
        <p className="footer-item-description">
          Our Book Store is your go-to destination for stories that inspire,
          educate, and entertain. From bestsellers to hidden gems, we offer a
          wide range of books for every reader. We’re passionate about creating
          a smooth, enjoyable experience — helping you discover your next great
          read with ease and joy.
        </p>
      </div>
    </div>
  );
};

export default FooterItems;
