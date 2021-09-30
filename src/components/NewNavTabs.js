import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NewNavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        {/* <Container> */}
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav>
          <Nav.Link
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#blog"
            onClick={() => handlePageChange("Blog")}
            className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
          >
            Blog
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
        </Nav>
        {/* </Container> */}
      </Navbar>
    </>
  );
}

export default NewNavTabs;
