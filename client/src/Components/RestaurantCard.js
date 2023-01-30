import React from "react";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function RestaurantCard({restaurant, reviews}){
    
    return(
        <div>
        <Card>
            <Card.Img variant="top" src={restaurant.image_url} />
            <Card.Body>
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Text>
                {restaurant.address}
                <p>
                    {restaurant.cuisine} | {restaurant.price} | ☆{restaurant.restaurant_rating} ({restaurant.number_of_reviews} reviews)
                </p>
              </Card.Text>
            </Card.Body>
            <div>
                <Button size="sm" variant="primary">Read the Reviews</Button>{' '}
            </div>
            {/* show up only when the user clicks on Read the Reviews Button */}
            {reviews.map(review => {
                return(
                    <ReviewCard 
                        key={review.id}
                        review={review}
                    />
                )
            })}
            {/* show up only when user is signed in */}
            <div>
                <Button variant='secondary' size='sm' >
                    Add a New Review
                </Button>
            </div>
            {/* show up only when user clicks the button */}
            <ReviewForm />
        </Card>
        
        </div>
    )
}

export default RestaurantCard