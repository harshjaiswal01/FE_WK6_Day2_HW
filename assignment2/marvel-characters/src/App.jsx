import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import Comics from './components/Comics';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <NavBar />
            <Container className="mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/characters" element={<CharacterList />} />
                    <Route path="/characters/:id" element={<CharacterDetail />} />
                    <Route path="/comics" element={<Comics />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </>
    );
};

export default App;
