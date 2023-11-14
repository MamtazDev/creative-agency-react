import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import brandImg from '../../../assets/home1/headerLogo.png'
import mobileNavIcon from '../../../assets/home1/mobileMenu.png'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className="">
                <Container>
                    <Link class="navbar-brand" to={'/'}>
                        <img class="img-fluid logoImg" src={brandImg} alt="Logo" />
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">

                            <NavDropdown title="Home" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">
                                    Home 2
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Home 3
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Link to='/about' className='nav-link'>
                                About
                            </Link>

                            <Link to='/services' className='nav-link'>
                                Services
                            </Link>

                            <Link to='/portfoilio' className='nav-link'>
                                Portfoilio
                            </Link>

                            <NavDropdown title="Pages" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">
                                    Page 2
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Page 3
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Link to='/contact-us' className='nav-link'>
                                Contact Us
                            </Link>
                        </Nav>

                        <form class="d-flex gap-2 authBtn">
                            <a href="#" class="" type="submit">Sign Up</a>
                            <a href="#" class="" type="submit">Log in</a>
                        </form>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    )
}

export default Header