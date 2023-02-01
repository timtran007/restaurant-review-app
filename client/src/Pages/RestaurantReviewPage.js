//intention of the page is to show state of the restaurant detail page with all reviews... get request for /restaurants/:id/reviews

import React from "react";
import RestaurantsContainer from "../Components/RestaurantsContainer";

//pass prop of user down to restaurants container...

function RestaurantReviewPage({allRestaurants, user, onCreateReview}) {
    
    return(
        <div>
            <h1>Restaurants Reviewed by Foodies</h1>
            <RestaurantsContainer allRestaurants={allRestaurants} user={user} onCreateReview={onCreateReview}/>
        </div>
    )
}

export default RestaurantReviewPage;