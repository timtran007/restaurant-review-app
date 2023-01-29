
import React from "react";
import SignupForm from "../Components/SignupForm";


function LoginPage(){
    
    function handleButtonClick(){

    }

    return(
        <div>
            <SignupForm />
            <div>
                <p>Already have an account?</p>
                <button onClick={handleButtonClick}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginPage