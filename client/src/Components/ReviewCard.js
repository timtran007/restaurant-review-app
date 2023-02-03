import React from "react";
import Card from 'react-bootstrap/Card';

function ReviewCard({review}){
    return(
        <div>
            <Card>
                <Card.Title>{review.headline}</Card.Title>
                <Card.Text>
                    ☆{review.rating}
                </Card.Text>
                <Card.Text>
                    {review.comment}
                </Card.Text>
                <Card.Subtitle>- {review.user_name}</Card.Subtitle>
                
            </Card>
        </div>
    )
}

export default ReviewCard