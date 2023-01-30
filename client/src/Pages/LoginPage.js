//Page that holds the login form


import React from "react";
import {NavLink} from "react-router-dom";
import LoginForm from "../Components/LoginForm";


function LoginPage(){

    function handleButtonClick(){

    }

    return(
        <div>
            <LoginForm />
            <p>
                Don't have an account yet? <NavLink to='/signup'>Sign Up here!</NavLink>
            </p>
        </div>
    )
}

export default LoginPage