import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="py-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmHn7hDycWvYvGnj50dxygz2EUz8MBKKCqg&s"
            alt="Comic Library Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/characters">Browse Characters</Nav.Link>
          <Nav.Link as={NavLink} to="/comics">Comics</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
