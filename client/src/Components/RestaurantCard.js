import React from "react";
import ReviewCard from "./ReviewCard";
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
            {reviews.map(review => {
                return(
                    <ReviewCard 
                        key={review.id}
                        review={review}
                    />
                )
            })}
            
        </Card>
        
        </div>
    )
}

export default RestaurantCard