import React, { useState } from "react";
import { useHistory } from "react-router-dom";



function LoginForm({onLogin}){
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const initialFormData = {
        user_name: "",
        password: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    function handleChange(e){
        const key = e.target.name
        const value = e.target.value
        setFormData({
            ...formData,
            [key] : value
        })
    }

    //use the useHistory hook to push to /profile, after logging in
    function handleSubmit(e){
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r) => {
            if (r.ok) {
                r.json().then( (user )=> onLogin(user))
                history.push("/profile")
            } else{
                r.json().then( error => setErrors(error.errors))
            }
        })
    }
    const displayError = errors.map( e => e)
    return(
        <form onSubmit={handleSubmit}>
            {displayError}
            <div>
                <label htmlFor="username">Username</label>
                <p>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="enter username information"
                        onChange={handleChange}
                        value={formData.user_name}
                    />
                </p>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <p>
                    <input
                        type="password"
                        name="password"
                        placeholder="enter password information"
                        onChange={handleChange}
                        value={formData.password}
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