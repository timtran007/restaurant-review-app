//Page that holds the login form


import React from "react";
import LoginForm from "../Components/LoginForm";


function LoginPage(){

    function handleButtonClick(){

    }

    return(
        <div>
            <LoginForm />
            <button onClick={handleButtonClick}>
                Sign Up
            </button>
        </div>
    )
}

export default LoginPage