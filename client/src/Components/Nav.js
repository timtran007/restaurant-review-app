import React from "react";
import { NavLink } from "react-router-dom";

function Nav(){
    return(
        <nav>
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink to="/users/new">
                Signup
            </NavLink>
            <NavLink to="/login">
                Login
            </NavLink>
            <NavLink to="profile">
                Profile's Name
            </NavLink>
            <NavLink to="logout">
                Logout
            </NavLink>
        </nav>
    )
}

export default Nav