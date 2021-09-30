import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NewNavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        {/* <Container> */}
        <Navbar.Brand href="#home">Hayden</Navbar.Brand>
        <Nav>
          <Nav.Link
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#projects"
            onClick={() => handlePageChange("Projects")}
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </Nav.Link>
          <Nav.Link
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Nav.Link>
          <Nav.Link
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </Nav.Link>
        </Nav>
        {/* </Container> */}
      </Navbar>
    </>
  );
}

export default NewNavTabs;
