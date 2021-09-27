import React, {useState} from 'react';
import {Nav, Navbar, Container,NavDropdown} from 'react-bootstrap';
import SocialMedia from '../SocialMedia/SocialMedia';
import Pdf from '../resources/Jonathan_Othoudt_Resume.pdf'
import './Header.css'
//this component will be for the bootstrap nav bar
function Header(){
    const onResumeClick=()=> {
        window.open(Pdf);
    }
      
    return(
        <>
        {/* When the user's screen has a width smaller that 800px. 
        This Navbar will show */}
        <div class="show-mobile">
            <Navbar class="show-mobile" bg="dark" variant="dark" expand="dark">
                <Container>
                    <Navbar.Brand href="#home">Jonathan Othoudt</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav class="show-mobile" className="me-auto">
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#home">Home</NavDropdown.Item>
                            <NavDropdown.Item href="/#/projects">Projects</NavDropdown.Item>
                            <NavDropdown.Item href="/#/contact">Contact Me</NavDropdown.Item>
                            <NavDropdown.Item onClick={onResumeClick} target='_blank' rel='noopener noreferrer'>Resume</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
            {/* When a user has a screen with a width greater than 800px.
            This Navbar will show */}
            <div class="hide-mobile">
            <Navbar class="hide-mobile" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Jonathan Othoudt</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="/#/projects">Projects</Nav.Link>
                            <Nav.Link href="/#/contact">Contact Me</Nav.Link>
                            <Nav.Link onClick={onResumeClick} target='_blank' rel='noopener noreferrer'>Resume</Nav.Link>
                        </Nav>
                    </Container>
                    <Container className="d-flex justify-content-end">
                        <Nav>
                            <SocialMedia />
                        </Nav>
                    </Container>
            </Navbar>
            </div>
        </>
    )
}

export default Header;