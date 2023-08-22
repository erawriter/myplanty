import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from './logo-7.png';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComp() {
    return (
        <div>
            <Navbar expand="sm">
                <Container className='sticky-top'>
                    <NavHeader>
                    <Navbar.Brand href="http://localhost:3000"><img src={logo} className='logo' alt=''></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
                            <Nav.Link href="http://localhost:3000/Plantcare">Plant Care</Nav.Link>
                            <Nav.Link href="http://localhost:3000/About">About</Nav.Link>
                            <NavDropdown title="Local Shops" id="basic-nav-dropdown">
                            <NavDropdown.Item href="http://localhost:3000/Localshops">Local Shops</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="http://localhost:3000/Localshops">
                                Community Gardens
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </NavHeader>
            </Container>
        </Navbar>
      </div>
    );
  }

export default NavbarComp;

const NavHeader = Styled.div`
margin-left: 35%; 
`