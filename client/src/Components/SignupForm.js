import React from "react";

function SignupForm(){
    return(
        <form>
            <div>
                <label htmlFor='name'>Name</label>
                <p> 
                    <input 
                        type="text"
                        name="name"
                        placeholder="enter name"
                    />
                </p>
            </div>
            <div>
                <label htmlFor="username">Username:</label>
                <p>
                    <input
                        type="text"
                        name="username"
                        placeholder="enter username"
                    />
                </p>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <p>
                    <input
                        type="text"
                        name="password"
                        placeholder="enter password"
                    />
                </p>
            </div>
            <div>
                <label htmlFor="passwordConfirmation">Password Confirmation:</label>
                <p>
                    <input
                        type="text"
                        name="passwordConfirmation"
                        placeholder="confirm password"
                    />
                </p>
            </div>
            <div>
                <input type="submit" value="Sign up"/>
            </div>
        </form>
    )
}

export default SignupForm;