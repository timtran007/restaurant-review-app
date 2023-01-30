//add condtion to not show sign up if user is logged in, instead show profile, reviews and logout
//if user is not logged in show sign up and login links
import React from "react";
import { NavLink } from "react-router-dom";

function Nav(){
    return(
        <nav>
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink to="/signup">
                Signup
            </NavLink>
            <NavLink to="/login">
                Login
            </NavLink>
            <NavLink to="/profile">
                Profile's Name
            </NavLink>
            <NavLink to="/profile/reviews">
                My Reviews
            </NavLink>
            <NavLink to="/logout">
                Logout
            </NavLink>
        </nav>
    )
}

export default Nav