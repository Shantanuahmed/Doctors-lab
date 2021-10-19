import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="container-fluid bg-dark">
            <h1 className="text-center p-2 bg-secondary text-info fw-bold"> <span className="">Doctor's</span> Lab</h1>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto p-2">
                            <Nav.Link className="text-white" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="text-white" as={Link} to="/about">About us</Nav.Link>
                            <Nav.Link className="text-white" as={Link} to="/doctors">Doctors</Nav.Link>
                            {user?.email ? <Button onClick={logOut} variant="light">Logout</Button>
                                : <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>}
                            <Navbar.Text>{user?.email ? "Signed in as:" : ""} <a href="">{user?.displayName}</a> </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;