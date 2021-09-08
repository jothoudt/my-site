import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import SocialMedia from '../SocialMedia/SocialMedia';

function Header(){
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Jonathan Othoudt</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="/#/resume">Resume</Nav.Link>
                            <Nav.Link href="/#/projects">Projects</Nav.Link>
                        </Nav>
                    </Container>
                    <Container className="d-flex justify-content-end">
                        <Nav>
                            <SocialMedia />
                        </Nav>
                    </Container>
            </Navbar>
        </>
    )
}

export default Header;