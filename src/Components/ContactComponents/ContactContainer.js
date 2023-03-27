import React from "react";

export default function ContactContainer() {
  return (
    <div className="div-contact-container">
      <div className="div-contact-container-left">
        <div className="div-contact-left-top">
          <img src="images/me.png" alt="James Page" />
          <p>Greetings, thank you for taking the time to view my site.</p>
        </div>
        <p>
          I've been a programmer now for more than 10 years. It's been a great
          journey so far. I've always enjoyed learning about tech for the last
          20 years. I enjoy providing clean architecture solutions and
          maintainable code for teams and businesses. If I sound like the type
          of person you want on your team, or if you just want to reach out and
          say hi, then please...
        </p>
        <div className="div-contact-left-bottom">
          <h1>Contact&nbsp;Me</h1>
          <div className="div-contact-long-arrow" />
        </div>
      </div>
      <div className="div-contact-container-right">
        <div>
          <a
            href="https://www.linkedin.com/in/james-page-701aa11b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Linkedin</h3>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/jamespagedev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Github</h3>
          </a>
        </div>
        <div>
          <a
            href="mailto:jamespageportfolio@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Email</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
