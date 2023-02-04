import React, {useState} from "react";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../App.css"

function RestaurantCard({restaurant, reviews, user, onCreateReview, onHandleSubmit}){
    //state to control showing more content
    const [readReviewsClick, setReadReviewsClick] = useState(false)
    const [addReviewClick, setAddReviewClick] = useState(false)

    function handleReadReviewsClick(){
        setReadReviewsClick(!readReviewsClick)
    }

    function handleAddReviewClick(){
        setAddReviewClick(!addReviewClick)
    }

    function onHandleAddReview(newState){
        setAddReviewClick(newState)
    }
    
    
    return(
        <div>
        <Card className="restaurantCard">
            <Card.Title>{restaurant.name}</Card.Title>
            <Card.Img variant="top" src={restaurant.image_url} className="restaurantImage"/>
            <Card.Body>
              <Card.Text>
                {restaurant.address}
                </Card.Text>
                <Card.Text>
                    {restaurant.cuisine} | {restaurant.price} | ☆{restaurant.restaurant_rating} ({restaurant.number_of_reviews} reviews)
                </Card.Text>
            </Card.Body>
            <div className="readReviewButton">
                <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={handleReadReviewsClick}
                >
                    {readReviewsClick ? "collapse" : "Read the Reviews"}
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
                } else{
                    return(
                        <div key={review.id}></div>
                    )
                }
            })}
            {user ? (<div>
                <Button 
                    variant='outline-secondary' 
                    size='sm' 
                    onClick={handleAddReviewClick}
                    className="addReviewButton"
                >
                    {addReviewClick ? "close" : "Add a New Review"}
                </Button>
            </div>) : ""}
            { addReviewClick ? <ReviewForm restaurant={restaurant} onCreateReview={onCreateReview} user={user} onHandleSubmit={onHandleAddReview}/> : ""}
        </Card>
        </div>
    )
}

export default RestaurantCard