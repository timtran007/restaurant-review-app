import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import '../App.css'
import Card from 'react-bootstrap/Card';


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
        <Card className="signUpForm">
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="signUpFormField">
                <Form.Label 
                    htmlFor='name'
                    column="lg"
                    lg={5}
                >
                    Name:
                </Form.Label>
                <Col lg="auto"> 
                    <Form.Control 
                        type="text"
                        name="name"
                        placeholder="enter name"
                        onChange={handleChange}
                        value={formData.name}
                        size="lg"
                        />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="signUpFormField">
                <Form.Label 
                    htmlFor="user_name"
                    column="lg"
                    lg={5}
                >
                    Username:
                </Form.Label>
                <Col lg="auto">
                    <Form.Control
                        type="text"
                        name="user_name"
                        placeholder="enter username"
                        onChange={handleChange}
                        value={formData.user_name}
                        size="lg"
                        />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="signUpFormField">
                <Form.Label 
                    htmlFor="password"
                    column="lg"
                    lg={5}
                >
                    Password:
                </Form.Label>
                <Col lg="auto">
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="enter password"
                        onChange={handleChange}
                        value={formData.password}
                        size="lg"
                        />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="signUpFormField">
                <Form.Label 
                    htmlFor="password_confirmation"
                    column="lg"
                    lg={5}
                >
                    Password Confirmation:
                </Form.Label>
                <Col lg="auto">
                    <Form.Control
                        type="password"
                        name="password_confirmation"
                        placeholder="confirm password"
                        onChange={handleChange}
                        value={formData.password_confirmation}
                        size="lg"
                        />
                </Col>
            </Form.Group>
            <div>
                <Button className="loginButton" variant="secondary" type="submit" size="lg">
                    Sign up
                </Button>
            </div>
            {displayError}
        </Form>
        </Card>
    )
}

export default SignupForm;