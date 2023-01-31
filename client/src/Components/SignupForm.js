import React, {useState} from "react";

function SignupForm({onLogin}){
    const initialFormData = {
        name: "",
        user_name: "",
        password: "",
        password_confirmation: ""
    }

    const [formData, setFormData] = useState(initialFormData)

    function handleChange(e){
        const key = e.target.name
        const value = e.target.value
        setFormData({
            ...formData,
            [key]: value
        })
    }

    //set user with onLogin, use the useHistory hook to push to /profile
    function handleSubmit(e){
        e.preventDefault()
    }

    return(
        <form onSubmti={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <p> 
                    <input 
                        type="text"
                        name="name"
                        placeholder="enter name"
                        onChange={handleChange}
                        value={formData.name}
                    />
                </p>
            </div>
            <div>
                <label htmlFor="user_name">Username:</label>
                <p>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="enter username"
                        onChange={handleChange}
                        value={formData.user_name}
                    />
                </p>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <p>
                    <input
                        type="password"
                        name="password"
                        placeholder="enter password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                </p>
            </div>
            <div>
                <label htmlFor="passwordConfirmation">Password Confirmation:</label>
                <p>
                    <input
                        type="password"
                        name="passwordConfirmation"
                        placeholder="confirm password"
                        onChange={handleChange}
                        value={formData.password_confirmation}
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