//Page that holds the login form


import React from "react";
import LoginForm from "../Components/LoginForm";
import { Link } from "react-router-dom";


function LoginPage({onLogin}){

    return(
        <div>
            <h2>Log Into Your Account</h2>
            <LoginForm onLogin={onLogin}/>
            <p>
                Don't have an account yet? <Link to='/signup'>Sign up here</Link>!
            </p>
        </div>
    )
}

export default LoginPage