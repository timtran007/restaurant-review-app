import React from "react";

function LoginForm(){
    return(
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <p>
                    <input
                        type="text"
                        name="username"
                        placeholder="enter username information"
                    />
                </p>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <p>
                    <input
                        type="text"
                        name="password"
                        placeholder="enter password information"
                    />
                </p>
            </div>
            <div>
                <input type="submit" value="Login"/>
            </div>
        </form>
    )
}

export default LoginForm