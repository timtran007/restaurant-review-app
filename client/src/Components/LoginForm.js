import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import '../App.css'
import Card from 'react-bootstrap/Card';



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
            [key]: value
        })
    }
    
    //fetch for logging in as user
    function handleSubmit(e){
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((resp) => {
            if (resp.ok) {
                resp.json()
                .then(userInfo => onLogin(userInfo))
                history.push("/profile")
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
        <Card className="loginForm">
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="formField" >
                <Form.Label 
                    htmlFor="user_name"
                    column="lg"
                    lg="auto"
                    >
                    Username:
                </Form.Label>
                <Col lg="auto">
                    <Form.Control 
                        type="text" 
                        placeholder="enter username"
                        name="user_name"
                        onChange={handleChange}
                        value={formData.user_name}
                        size="lg"
                        />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="formField">
                <Form.Label 
                    htmlFor="password"
                    column="lg"
                    lg="auto"
                    >
                    Password:
                </Form.Label>
                <Col lg="auto">
                    <Form.Control 
                        type="password" 
                        placeholder="enter password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        size="lg"
                        />
                </Col>
            </Form.Group>
            <div>
            <Button className="loginButton" variant="secondary" type="submit" size="lg">
                Login
            </Button>
            </div>
            <div className="displayError">
            {displayError}
            </div>
        </Form>
        </Card>
    )
}

export default LoginForm