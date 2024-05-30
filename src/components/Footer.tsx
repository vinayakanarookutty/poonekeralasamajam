import "../css/home.css"; // Assuming you have a CSS file for additional styles

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-info">
              <h3>POONA KERALEEYA SAMAJ</h3>
              <p className="pb-3"><em>Unifying Kerala, Enriching Community</em></p>
              <address>
                <p>
                  Rasta Peth <br />
                  Pune, Maharashtra<br /><br />
                  <strong>Phone:</strong>
                  <span style={{ fontFamily: 'sans-serif' }}> 9822061992, 982221700, 9850403055</span><br />
                  <strong>Email:</strong> poonakeralasamaj@gmail.com<br />
                </p>
              </address>
              <div className="social-links mt-3">
                <a href="https://youtu.be/imA0GxQBRO4?si=H0s5Kfei9iturEkD" className="youtube"><i className="bx bxl-youtube"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
    <h4>Quick Links</h4>
    <ul>
        <li><span className="bullet"></span> <a href="#home">Home</a></li>
        <li><span className="bullet"></span> <a href="#history">History</a></li>
        <li><span className="bullet"></span> <a href="#services">Activities</a></li>
        <li><span className="bullet"></span> <a href="#portfolio">Gallery</a></li>
        <li><span className="bullet"></span> <a href="#testimonials">Committee</a></li>
        <li><span className="bullet"></span> <a href="#contact">Contact</a></li>
    </ul>
</div>

            <div className="col-lg-4 col-md-12 location">
              <h4>We're Here !</h4>
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.646340891092!2d73.85674351440658!3d18.520430287409918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07c4b888888%3A0xe3a0a0aebaf74f1c!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1624561377068!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
            
                  loading="lazy"
                  title="Pune Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Poona Keraleeya Samaj</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed And Developed By <a href="https://website.n-oms.in/">N-OMS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
