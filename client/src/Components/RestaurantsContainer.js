import React from "react";
import RestaurantCard from '../Components/RestaurantCard';

function RestaurantsContainer({allRestaurants, user, onCreateReview}) {
    return(
        <div>
            {allRestaurants.map(restaurant => {
                return(
                <RestaurantCard 
                    key={restaurant.id}
                    restaurant={restaurant}
                    reviews={restaurant.reviews}
                    user={user}
                    onCreateReview={onCreateReview}
                />)
            }) 
            }
        </div>
    )
}

export default RestaurantsContainer