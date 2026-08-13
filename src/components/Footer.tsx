import "./Footer.css";

import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-built-with">
        <span>Built with</span>

        <a
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer"
          className="footer-tech"
        >
          <img
            src={reactLogo}
            alt="React"
            className="footer-tech-logo"
          />
          <span>React</span>
        </a>

        <span className="footer-separator">•</span>

        <span>Powered by</span>

        <a
          href="https://vite.dev/"
          target="_blank"
          rel="noreferrer"
          className="footer-tech"
        >
          <img
            src={viteLogo}
            alt="Vite"
            className="footer-tech-logo"
          />
          <span>Vite</span>
        </a>
      </div>

      <p className="footer-copyright">
        © 2026 Mitchell Gegich. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;