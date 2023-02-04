import React, {useState} from "react";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function ReviewForm({user, restaurant, onCreateReview, onHandleSubmit}){
    const initialFormData = {
        headline: '',
        rating: 0,
        comment: '',
        restaurant_id: restaurant.id,
    }
    const [formData, setFormData] = useState(initialFormData)
    const [errors, setErrors] = useState([])

    function handleChange(e){
        const key = e.target.name
        const value = e.target.value
        setFormData({
            ...formData,
            [key]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData)
        }).then( resp => {
            if(resp.ok){
                resp.json().then(newReview => onCreateReview(newReview))
                onHandleSubmit(false)
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
        <Card className="addReviewForm">
            <Card.Text>Add a Review</Card.Text>
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="formField">
                
                <Form.Label
                     htmlFor="headline"
                     column="sm"
                     sm={4}
                >
                    Headline:
                </Form.Label>
                <Col sm="auto">
                    <Form.Control
                        type="text"
                        name="headline"
                        placeholder="enter headline"
                        onChange={handleChange}
                        value={formData.headline}
                        size="sm"
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="formField">
                <Form.Label
                     htmlFor="rating"
                     column="sm"
                     sm={4}
                >
                    Rating:
                </Form.Label>
                <Col sm="auto">
                    <Form.Control
                        type="number"
                        name="rating"
                        placeholder="enter 1-5"
                        onChange={handleChange}
                        value={formData.rating}
                        size="sm"
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="formField">
                <Form.Label
                     htmlFor="comment"
                     column="sm"
                     sm="auto"
                >
                    Comments:
                </Form.Label>
                <Col sm="auto">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="comment"
                        placeholder="Write a review"
                        onChange={handleChange}
                        value={formData.comment}
                        size="large"
                    />
                </Col>
            </Form.Group>
            <div>
                <Button variant="secondary" size="sm" type="submit">Add Review</Button>
            </div>
            <div className="displayError">
            {displayError}
            </div>
        </Form>
        </Card>
    )
}

export default ReviewForm