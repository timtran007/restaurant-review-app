//house all the restaurants that are associated with the logged in user

import React from "react";
import UserRestaurantCard from "./UserRestaurantCard";

//Contains state for user logged in
//pass mapped information of user restaurants


function UserContainer(){
    return(
        <div>
            <UserRestaurantCard />
        </div>
    )
}

export default UserContainer;