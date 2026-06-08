import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-info">
          <h2>QUICK CONTACT</h2>

          <div className="info-group">
            <p>
              <strong>Phone:</strong> 09033203136
            </p>

            <p>
              <strong>Email:</strong> davidokorowanta9@gmail.com
            </p>

            <p>
              <strong>Location:</strong> Port Harcourt, Nigeria
            </p>
          </div>

          <div className="availability">
            <h3>24/7 ANYTIME</h3>

            <p>
              Available for freelance projects, business websites,
              landing pages, and web applications. Feel free to reach
              out anytime to discuss your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;