import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function SignupForm({onLogin}){
    const [errors, setErrors] = useState([])
    const history = useHistory()
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

    //fetch to create user
    function handleSubmit(e){
        e.preventDefault()
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then( resp => {
            if(resp.ok) {
                resp.json()
                .then(newUser => onLogin(newUser))
                history.push('/profile')
            } else{
                resp.json().then( error => setErrors(error.errors))
            }
        })
    }

    const displayError = errors.map( e => {
        return(
            <p key={e} style={{color:"red"}}>{e}</p>
        )
    })

    return(
        <form onSubmit={handleSubmit}>
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
                <label htmlFor="password_confirmation">Password Confirmation:</label>
                <p>
                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="confirm password"
                        onChange={handleChange}
                        value={formData.password_confirmation}
                    />
                </p>
            </div>
            <div>
                <input type="submit" value="Sign up"/>
            </div>
            {displayError}
        </form>
    )
}

export default SignupForm;