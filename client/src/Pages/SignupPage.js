
import React from "react";
import SignupForm from "../Components/SignupForm";
import { Link } from "react-router-dom";


function SignupPage({onLogin}){

    return(
        <div>
            <h2>Sign Up for an Account</h2>
            <SignupForm onLogin={onLogin}/>
            <div>
                <p>Already have an account? <Link to='/login'>Login here</Link>!</p>
            </div>
        </div>
    )
}

export default SignupPage