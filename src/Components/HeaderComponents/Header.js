import React, { useState } from "react";
import { Link } from "react-scroll";
import HamburgerDropdown from "./HamburgerDropdown";

// components
import NavDesktop from "./NavDesktop.js";
import NavTablet from "./NavTablet.js";
import NavPhone from "./NavPhone.js";

function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  return (
    <header className="header">
      <NavDesktop />
      <NavTablet />
      <NavPhone
        isHamburgerOpen={isHamburgerOpen}
        setIsHamburgerOpen={setIsHamburgerOpen}
      />
      <HamburgerDropdown isHamburgerOpen={isHamburgerOpen}>
        <Link
          to="intro"
          spy={true}
          smooth={true}
          duration={500}
          className="header-nav-link"
          activeClass="header-nav-link--active"
          onClick={() => setIsHamburgerOpen(false)}
        >
          Intro
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="header-nav-link"
          activeClass="header-nav-link--active"
          onClick={() => setIsHamburgerOpen(false)}
        >
          About
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className="header-nav-link"
          activeClass="header-nav-link--active"
          onClick={() => setIsHamburgerOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          className="header-nav-link"
          activeClass="header-nav-link--active"
          onClick={() => setIsHamburgerOpen(false)}
        >
          Skills
        </Link>
        <a
          href="/#"
          className="header-nav-link"
          onClick={() => setIsHamburgerOpen(false)}
        >
          Resumes
        </a>
        <a
          href="/#"
          className="header-nav-link"
          onClick={() => setIsHamburgerOpen(false)}
        >
          Contact
        </a>
      </HamburgerDropdown>
    </header>
  );
}

export default Header;
