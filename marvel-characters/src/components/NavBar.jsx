import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Nav className="justify-content-center my-4">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/" end>
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/characters">
                    Browse Characters
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/comics">
                    Comics
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default NavBar;
