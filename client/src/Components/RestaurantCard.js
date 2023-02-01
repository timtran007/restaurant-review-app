import React, {useState} from "react";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function RestaurantCard({restaurant, reviews, user, onCreateReview}){
    //state to control showing more content
    const [readReviewsClick, setReadReviewsClick] = useState(false)
    const [addReviewClick, setAddReviewClick] = useState(false)

    function handleReadReviewsClick(){
        setReadReviewsClick(!readReviewsClick)
    }

    function handleAddReviewClick(){
        setAddReviewClick(!addReviewClick)
    }
    
    
    return(
        <div>
        <Card>
            <Card.Img variant="top" src={restaurant.image_url} />
            <Card.Body>
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Text>
                {restaurant.address}
                </Card.Text>
                <Card.Text>
                    {restaurant.cuisine} | {restaurant.price} | ☆{restaurant.restaurant_rating} ({restaurant.number_of_reviews} reviews)
                </Card.Text>
            </Card.Body>
            <div>
                <Button 
                    size="sm" 
                    variant="primary"
                    onClick={handleReadReviewsClick}
                >
                    Read the Reviews
                </Button>
            </div>
            {reviews.map(review => {
                if (readReviewsClick){
                    return(
                        <ReviewCard 
                            key={review.id}
                            review={review}
                        />
                    ) 
                } 
            })}
            <div>
                <Button 
                    variant='secondary' 
                    size='sm' 
                    onClick={handleAddReviewClick}
                >
                    Add a New Review
                </Button>
            </div>
            { addReviewClick ? <ReviewForm restaurant={restaurant} onCreateReview={onCreateReview} user={user}/> : ""}
        </Card>
        </div>
    )
}

export default RestaurantCard