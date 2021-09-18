import React from "react"
import { Navbar, Container, Nav, Link } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

export const NavBar = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">LocalFaves</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/restaurants">Restaurants</Nav.Link>
                        <Nav.Link href="/things-to-do">Things to do</Nav.Link>
                        <Nav.Link href="/places">Places</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

