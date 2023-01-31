//house all the restaurants that are associated with the logged in user

import React from "react";
import {Switch, Route} from "react-router-dom";
import UserRestaurantCard from "./UserRestaurantCard";
import UserReviewsPage from "../Pages/UserReviewsPage";
import UserReviewDetail from "./UserReviewDetail";

//Contains state for user logged in
//pass mapped information of user restaurants


function UserContainer(){
    return(
        <div>
            <UserRestaurantCard />
            <Switch>
                <Route exact path='/profile/reviews'>
                    <UserReviewsPage />
                </Route>
                <Route path='/profile/reviews/:id'>
                    <UserReviewDetail />
                </Route>

            </Switch>
        </div>
    )
}

export default UserContainer;