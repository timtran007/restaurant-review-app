//hosts all the reviews associated with logged in user...
import React from "react";
import Card from 'react-bootstrap/Card'
import EditReviewForm from "./EditReviewForm";
import DeleteReview from "./DeleteReview";

function ReviewsContainer({review, user, onEditReview, onDeleteReview}){
    console.log("reviewscontainer", review)
            return(
                <div>
                    <Card>
                        <Card.Title>{review.headline}</Card.Title>
                        <Card.Text>
                            {review.restaurant.name}
                        </Card.Text>
                        <Card.Text>
                            ☆{review.rating}
                        </Card.Text>
                        <Card.Text>
                            {review.comment}
                        </Card.Text>
                        <EditReviewForm review={review} onEditReview={onEditReview}/>
                        <div>
                        <DeleteReview review={review} onDelete={onDeleteReview}/>
                        </div>
                    </Card>
                </div>
            )
}

export default ReviewsContainer