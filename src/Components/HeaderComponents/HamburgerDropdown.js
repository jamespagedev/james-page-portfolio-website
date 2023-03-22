import React, { useLayoutEffect, useRef } from "react";

const borderHeights = 14; // px

function HamburgerDropdown({ isHamburgerOpen, children }) {
  // variables
  const contentEl = useRef(null);
  const componentHeight = useRef(0);

  // setup
  useLayoutEffect(() => {
    componentHeight.current = contentEl.current
      ? contentEl.current.scrollHeight
      : 0;
  }, []);

  // render
  return (
    <div
      ref={contentEl}
      className="div-hamburger-content"
      style={
        isHamburgerOpen
          ? {
              maxHeight: `${componentHeight.current + borderHeights}px`,
            }
          : { maxHeight: "0px" }
      }
    >
      <nav className="nav-hamburger-content">{children}</nav>
    </div>
  );
}

export default HamburgerDropdown;
