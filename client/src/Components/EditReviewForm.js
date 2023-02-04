import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

function EditReviewForm({onEditReview, review}){
    const [errors, setErrors] = useState([])

    const currentFormData = {
        headline: `${review.headline}`,
        rating: `${review.rating}`,
        comment: `${review.comment}`
    }

    const [buttonClick, setButtonClick] = useState(false)
    const [updatedReview, setUpdatedReview] = useState(currentFormData)

    function handleButtonClick(){
        setButtonClick(!buttonClick)
    }

    function handleUpdate(e) {
        const key = e.target.name
        const value = e.target.value
        setUpdatedReview({
            ...updatedReview,
            [key]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedReview)
        })
        .then(resp => {
            if (resp.ok){
                resp.json().then( updatedReviewData => onEditReview(updatedReviewData))
                setButtonClick(!buttonClick)
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
        <div>
            <Button variant='link' onClick={handleButtonClick} className="editButton">
                {buttonClick ? "hide" : "Edit My Review"}
            </Button>

        { buttonClick ? (
            <Card className="editForm">
                <Card.Text>My Review</Card.Text>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="formField">
                        <Form.Label 
                            htmlFor="headline"
                            column="sm"
                            sm={4}
                        >
                            Headline: 
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control
                            onChange={handleUpdate}
                            type="text"
                            name="headline"
                            value={updatedReview.headline}
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
                        <Col sm={7}>
                        <Form.Control
                            onChange={handleUpdate}
                            type="integer"
                            name="rating"
                            value={updatedReview.rating}
                            size="sm"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="formField">
                        <Form.Label 
                            htmlFor="comment"
                            column="sm"
                            sm={4}
                        >
                            Comment: 
                        </Form.Label>
                        <Col sm={7}>
                        <Form.Control
                            onChange={handleUpdate}
                            as="textarea"
                            rows={3}
                            name="comment"
                            value={updatedReview.comment}
                            size="sm"
                            />
                        </Col>
                    </Form.Group>
                    <Button type="submit" variant="secondary" size="sm" className="updateButton">Update my review</Button>
                    {displayError}             
                </Form>
            </Card>) : ""}
        </div>
    )   
}

export default EditReviewForm