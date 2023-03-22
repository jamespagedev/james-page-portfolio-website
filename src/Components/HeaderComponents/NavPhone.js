import React from "react";

function NavPhone({ isHamburgerOpen, setIsHamburgerOpen }) {
  return (
    <div className="div-phone">
      <div
        className="div-header-hamburger"
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
      >
        <span
          style={
            isHamburgerOpen
              ? { transition: "0.4s", top: "1rem", transform: "rotate(-45deg)" }
              : {}
          }
        />
        <span
          style={
            isHamburgerOpen
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
        />
        <span
          style={
            isHamburgerOpen
              ? { transition: "0.4s", top: "-1rem", transform: "rotate(45deg)" }
              : {}
          }
        />
      </div>
    </div>
  );
}

export default NavPhone;
