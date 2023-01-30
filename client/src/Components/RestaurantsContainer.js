
import React from "react";
import RestaurantCard from '../Components/RestaurantCard'


function RestaurantsContainer({allRestaurants}) {
    return(
        <div>
            {allRestaurants.map(restaurant => {
                return(
                <RestaurantCard 
                    key={restaurant.id}
                    restaurant={restaurant}
                    reviews={restaurant.reviews}
                />)
            }) 
            }
        </div>
    )
}

export default RestaurantsContainer