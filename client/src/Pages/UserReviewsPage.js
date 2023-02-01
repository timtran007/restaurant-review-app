//intention of this page is to fetch get request for user.reviews, so that logged in users can delete or update their reviews
//inherits the nested root from UserPage... /profile/reviews

import React, {useEffect, useState} from "react";
import ReviewsContainer from "../Components/ReviewsContainer";

function UserReviewsPage({user}){

    const [userReviews, setUserReviews] = useState([])

    useEffect(() =>{
        fetch('/user-reviews')
        .then(resp => {
            if (resp.ok){
                resp.json().then(reviews => setUserReviews(reviews))
            }
        })
    },[])

    function onEditReview(updatedUserReview){
        const updatedUserReviews = userReviews
        .map( review => {
            if(review.id === updatedUserReview.id){
                return updatedUserReview
            } else{
                return review
            }
        })
        setUserReviews(updatedUserReviews)

    }

    function onDeleteReview(deletedReview){

    }
    
    return(
        <div>
            UserReviewsPage
            {userReviews.map( review => {
                return(
                    <ReviewsContainer 
                        key={review.id}
                        review={review}
                        user={user}
                        onEditReview={onEditReview}
                        onDeleteReview={onDeleteReview}
                    />
                )
            })}
        </div>
    )
}

export default UserReviewsPage