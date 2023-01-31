import React, { useState } from "react";

function LoginForm(){
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

    function handleSubmit(e){
        e.preventDefault()
    }


    return(
        <form onSubmit={handleSubmit}>
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
                        type="text"
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