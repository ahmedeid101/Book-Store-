const SocialMedia = () => {
  return (
    <div className="footer-social-media">
      <div className="footer-social-media-text">Follow Us On Social Media</div>
      <div className="footer-social-media-icons">
        <div className="footer-social-media-icon">
          <a href="https://www.instagram.com/"><i style={{ color: "red" }} className="bi bi-instagram"></i></a>
        </div>
        <div className="footer-social-media-icon">
          <a href="https://www.facebook.com/"><i style={{ color: "#2980b9" }} className="bi bi-facebook"></i></a>
        </div>
        <div className="footer-social-media-icon">
          <a href="https://www.youtube.com/"><i style={{ color: "red" }} className="bi bi-youtube"></i></a>
        </div>
        <div className="footer-social-media-icon">
          <a href="https://x.com/"><i style={{ color: "black" }} className="bi bi-x"></i></a>
        </div>
        <div className="footer-social-media-icon">
          <a href="https://web.telegram.org/a/"><i style={{ color: "#3580b9" }} className="bi bi-telegram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
