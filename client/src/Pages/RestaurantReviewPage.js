//intention of the page is to show state of the restaurant detail page with all reviews... get request for /restaurants/:id/reviews

import React from "react";
import RestaurantsContainer from "../Components/RestaurantsContainer";

function RestaurantReviewPage({allRestaurants}) {
    
    return(
        <div>
            <h1>Restaurants Reviewed by Foodies</h1>
            <RestaurantsContainer allRestaurants={allRestaurants}/>
        </div>
    )
}

export default RestaurantReviewPage;