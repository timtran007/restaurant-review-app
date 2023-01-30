import React from "react";

function ReviewForm(){
    return(
        <form>
            <div>
                <label htmlFor="headline">Headline:</label>
                <p>
                    <input
                        type="text"
                        name="headline"
                        placeholder="enter headline"
                    />
                </p>
            </div>
            <div>
                <label htmlFor="rating">Rating:</label>
                <p>
                    <input
                        type="number"
                        name="rating"
                        placeholder="enter 1-5"
                    />
                </p>
            </div>
            <div>
                <label htmlFor="comment">Comments:</label>
                <p>
                    <input
                        type="textarea"
                        name="comment"
                        placeholder="Write a review"
                    />
                </p>
            </div>
            <div>
                <input type="submit" value="Add Review"/>
            </div>
        </form>
    )
}

export default ReviewForm