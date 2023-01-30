
import React from "react";
import SignupForm from "../Components/SignupForm";
import { Link } from "react-router-dom";


function SignupPage(){
    
    function handleButtonClick(){

    }

    return(
        <div>
            <h2>Sign Up for an Account</h2>
            <SignupForm />
            <div>
                <p>Already have an account? <Link>Login here</Link>!</p>
            </div>
        </div>
    )
}

export default SignupPage