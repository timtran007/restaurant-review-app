import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Foodies_Logo from '../Foodies_Logo.png'

function Navigation({user}){
    //create handling of user logout

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
                {!user ? (
                    <Nav>
                        <Nav.Link href="/signup">
                            Signup
                        </Nav.Link>
                        <Nav.Link href="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                    ) : (
                    <Nav>
                        <Nav.Link href="/profile">
                            {user.user_name}
                        </Nav.Link>
                        <Nav.Link href="/profile/reviews">
                            My Reviews
                        </Nav.Link>
                        <Nav.Link href="/logout">
                            Logout
                    </Nav.Link>
                </Nav>)}
                
                    
            </Container>
        </Navbar>
    )
}

export default Navigation