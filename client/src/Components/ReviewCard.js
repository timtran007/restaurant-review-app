import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

function ReviewCard({review}){
    
    return(
        <div>
            <Card>
                <Card.Title>{review.headline}</Card.Title>
                <Card.Text>
                    ☆{review.rating}
                    <p>{review.comment}</p>
                </Card.Text>
                <Card.Subtitle>- {review.user_name}</Card.Subtitle>
                
            </Card>
        </div>
    )
}

export default ReviewCard