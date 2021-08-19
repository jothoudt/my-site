import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';

function Header(){
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Jonathan Othoudt</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav>
                    </Container>
            </Navbar>
        </>
    )
}

export default Header;