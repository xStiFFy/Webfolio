import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-heading">
          <h1 className="about-title">About Me</h1>
        </div>

        <div className="about-body">
          <p className="about-text">
            I'm a computer science graduate and software developer with an
            interest in building practical, reliable systems and learning how
            technology works from the application layer down to the hardware
            and infrastructure supporting it.
          </p>

          <p className="about-text">
            My experience spans software development, APIs, databases,
            machine learning, Linux, networking, and hands-on technical
            troubleshooting. I especially enjoy projects where I can combine
            problem solving with building something that has a clear real-world
            purpose.
          </p>

          <p className="about-text">
            I'm currently focused on continuing to grow as a developer while
            exploring opportunities across software engineering and other
            technical roles.
          </p>

          <div className="about-highlights">
            <div className="about-highlight">
              <span className="about-highlight-label">Education</span>
              <span className="about-highlight-value">
                B.S. Computer Science
              </span>
            </div>

            <div className="about-highlight">
              <span className="about-highlight-label">Focus</span>
              <span className="about-highlight-value">
                Software Development
              </span>
            </div>

            <div className="about-highlight">
              <span className="about-highlight-label">Interests</span>
              <span className="about-highlight-value">
                Full-Stack, Systems, Data
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;