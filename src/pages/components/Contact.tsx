import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
          Become a PKS Member today and help us in nurturing Kerala’s roots in Pune
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Our Main Office Address</h3>
              <p>356 Rasta Peth Pune 411011</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>poonakeralasamaj@gmail.com​</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>9822061992 9822271700</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <iframe
              title="Google Maps"
              className="mb-4 mb-lg-0"
              src="https://maps.app.goo.gl/QC8wiDAXTjfs2bgRA"
              frameBorder="0"
              style={{ border: 0, width: '100%', height: '384px' }}
              allowFullScreen
            ></iframe>
          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
