import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

//Show associated restaurants to user through the log in

// need to pass down, user's state
function UserRestaurantsCard({restaurant, user}) {
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
                <Button size="sm" variant="primary">Read the Reviews</Button>{' '}
            </div>
        </Card>
        </div>
    )
}

export default UserRestaurantsCard