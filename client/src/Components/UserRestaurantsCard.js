import React from "react";
import Card from 'react-bootstrap/Card'


//Show associated restaurants to user through the log in

// need to pass down, user's state
function UserRestaurantsCard({restaurant, user}) {
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
        </Card>
        </div>
    )
}

export default UserRestaurantsCard