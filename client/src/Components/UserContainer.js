//house all the restaurants that are associated with the logged in user

import React from "react";
import RestaurantsContainer from "./RestaurantsContainer";

function UserContainer(){
    return(
        <div>
            <RestaurantsContainer />
        </div>
    )
}

export default UserContainer;