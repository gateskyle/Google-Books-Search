import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Navbar.Brand><h1>Google Books Search System</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/"><h4>Search For Books</h4></Nav.Link>
                    <Nav.Link href="saved"><h4>View Saved Books</h4></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;