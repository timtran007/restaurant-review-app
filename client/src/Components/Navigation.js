import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Foodies_Logo from '../Foodies_Logo.png'
import { useHistory } from "react-router-dom";

function Navigation({user, setUser}){
    //useHistory is currently not working... 
    const history = useHistory()

    //fetch to logout user (delete session)
    function handleLogout(){
        fetch("/logout", {
            method: "DELETE"
        }).then( resp => {
            if (resp.ok){
                setUser(null)
                history.push("/login")
            }
        }) 
    }

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
                {user ? (
                    <Nav>
                        <Nav.Link href="/profile">
                            Welcome {user.name}
                        </Nav.Link>
                        <Nav.Link href="/profile/reviews">
                            My Reviews
                        </Nav.Link>
                        <Nav.Link onClick={handleLogout} href="/logout">
                            Logout
                        </Nav.Link>
                    </Nav>) : (
                    <Nav>
                        <Nav.Link href="/signup">
                            Signup
                        </Nav.Link>
                        <Nav.Link href="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                    )}
                
                    
            </Container>
        </Navbar>
    )
}

export default Navigation