import React from "react";

// import { Navbar, Container, Nav } from "react-bootstrap";

function Footer() {
  return (
    <>
      <footer
        className="
        container-fluid
        d-flex
        justify-content-around
        align-items-center
        pt-4
        pb-4
        text-light text-center
        navUL
      "
        id="contactMe"
      >
        <span>Denver, Colorado </span>
        <span>
          <a href="mailto:haydenhaun@gmail.com" className="text-light">
            haydenhaun@gmail.com
          </a>
        </span>
        <span>
          <a href="mailto:haydenhaun@gmail.com" className="text-light">
            303-718-1311
          </a>
        </span>
      </footer>
    </>
  );
}

export default Footer;
