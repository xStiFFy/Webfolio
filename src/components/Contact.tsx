import "./Contact.css";

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-content">
        <h1 className="contact-title">Contact</h1>

        <p className="contact-text">
          Have an opportunity, project, or just want to connect?
          Feel free to reach out.
        </p>

        <div className="contact-details">
            <a
                href="tel:+17346247597"
                className="contact-phone"
            >
                (734) 624-7597
            </a>

            <a
                href="mailto:mitchell.gegich@gmail.com"
                className="contact-email"
            >
                mitchell.gegich@gmail.com
            </a>
        </div>

        <div className="contact-links">
          <a
            href="mailto:your-email@example.com"
            className="contact-link contact-link-primary"
          >
            Email Me!
          </a>

          <a
            href="https://github.com/xStiFFy"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mitchell-gegich-b29647186/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="contact-footer">
        <p>© 2026 Mitchell Gegich</p>
      </div>
    </footer>
  );
}

export default Contact;