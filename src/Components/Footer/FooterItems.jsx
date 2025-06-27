const FooterItems = () => {
  return (
    <div className="footer-items-wrapper">
      <div className="footer-items">
        <h3 className="footer-item-title">Usefull Links</h3>
        <ul className="footer-item-links">
          <li className="footer-link">Home</li>
          <li className="footer-link">Authors</li>
          <li className="footer-link">About Us</li>
          <li className="footer-link">Contact Us</li>
          <li className="footer-link">Register</li>
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
          incidunt, quidem voluptatum nostrum molestiae quas quae eius mollitia
          officia illo? Asperiores quo accusamus quidem nam placeat deleniti
          saepe architecto necessitatibus. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Repellendus culpa sunt sint rem vel.
        </p>
      </div>
    </div>
  );
};

export default FooterItems;
