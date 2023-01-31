//add condtion to not show sign up if user is logged in, instead show profile, reviews and logout
//if user is not logged in show sign up and login links
import React from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Foodies_Logo from '../Foodies_Logo.png'

function Navigation(){
    //create conditional based on user logged in or not to see Navigation options
    return(
        <Navbar>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        id='nav-logo'
                        src={Foodies_Logo}
                        width="120"
                        alt='Foodies logo'
                    />
                </Navbar.Brand>
                <Nav>
                    <Nav.Link src="/signup">
                        Signup
                    </Nav.Link>
                    <Nav.Link src="/login">
                        Login
                    </Nav.Link>
                    <Nav.Link src="/profile">
                        Profile's Name
                    </Nav.Link>
                    <Nav.Link src="/profile/reviews">
                        My Reviews
                    </Nav.Link>
                    <Nav.Link src="/logout">
                        Logout
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation