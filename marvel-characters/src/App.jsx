import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import Comics from './components/Comics';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Container>
            <Nav className="justify-content-center my-4">
                <Nav.Item>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/characters">Browse Characters</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/comics">Comics</Nav.Link>
                </Nav.Item>
            </Nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<CharacterList />} />
                <Route path="/characters/:id" element={<CharacterDetail />} />
                <Route path="/comics" element={<Comics />} />
            </Routes>
        </Container>
    );
};

export default App;
