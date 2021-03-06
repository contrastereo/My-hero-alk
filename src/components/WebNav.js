//dependencies
import React from "react";
import { useLocation } from "react-router";
//bootstrap
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const WebNav = () => {
  const location = useLocation();
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">My Hero Alkademy</Navbar.Brand>
        (<Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {location.pathname !== "/login" ? (
            <Nav className="me-auto d-flex">
              <Link className="nav-item px-2" to="/">
                My Team
              </Link>
              <Link className="nav-item px-3" to="/search">
                Search
              </Link>
            </Nav>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default WebNav;
