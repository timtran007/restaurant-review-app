import React, {useEffect, useState} from "react";
import UserRestaurantsCard from "../Components/UserRestaurantsCard";

//intention of this component is to fetch all restaurants associated with user after signing into the platform
//create useEffect fetch for user.restaurants or /me

//add a nested route for reviews
//https://learning.flatironschool.com/courses/5650/assignments/207891?module_item_id=479514

function UserPage({user}){
    return(
        <div>
            <h2>My Restaurants</h2>
            {!user ? "Loading" : user.restaurants.map( restaurant => {
                return(
                    <UserRestaurantsCard 
                        key={restaurant.id}
                        user={user}
                        restaurant={restaurant}
                    />
                )
            })}
            
        </div>
    )
}

export default UserPage