


function Contact() {
  return (
    <section id="contact" className="contact section-bg h-screen mt-5">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row">
          <div className="row-lg-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Our Address</h3>
              <p>356 Rasta Peth Pune 411011</p>
            </div>
          </div>

          <div className="row-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email Us</h3>
              <p>poonakeraleeyasamaj@example.com</p>
            </div>
          </div>

          <div className="row-lg-3 col-md-6">
            <div className="info-box  mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Call Us</h3>
              <p>9822061992 982221700 9850403055</p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Additional contact form or map */}
        </div>

      </div>
    </section>
  );
}

export default Contact;
