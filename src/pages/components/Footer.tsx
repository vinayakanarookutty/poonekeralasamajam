

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top ">
        <div className="container ">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3>POONA KERALEEYA SAMAJ</h3>
                <p className="pb-3"><em>Unifying Kerala, Enriching Community</em></p>
                <p>
                Rasta Peth <br />
                Pune, Maharashtra<br /><br />
                  <p>Phone:</p> 9822061992 ,982221700 ,9850403055<br />
                  <strong>Email:</strong> poonakeraleeyasamaj@example.com<br />
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="youtube"><i className="bx bxl-youtube"></i></a>
              
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
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
