import React, {useState} from "react";

function ReviewForm({user, restaurant, onCreateReview}){
    const initialFormData = {
        headline: '',
        rating: 0,
        comment: '',
        restaurant_id: restaurant.id,
        user_id: user.id
    }
    const [formData, setFormData] = useState(initialFormData)
    const [errors, setErrors] = useState([])

    function handleChange(e){
        const key = e.target.name
        const value = e.target.value
        setFormData({
            ...formData,
            [key]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData)
        }).then( resp => {
            if(resp.ok){
                resp.json().then(newReview => onCreateReview(newReview))
            } else{
                resp.json().then( error => setErrors(error.errors))
            }
        })
    }

    const displayError = errors.map( e => {
        return(
            <p key={e} style={{color:"red"}}>{e}</p>
        )
    })

    return(
        <form onSubmit={handleSubmit}>
            
            <div>
                
                <label htmlFor="headline">Headline:</label>
                <p>
                    <input
                        type="text"
                        name="headline"
                        placeholder="enter headline"
                        onChange={handleChange}
                        value={formData.headline}
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
                        onChange={handleChange}
                        value={formData.rating}
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
                        onChange={handleChange}
                        value={formData.comment}
                    />
                </p>
            </div>
            <div>
                <input type="submit" value="Add Review"/>
            </div>
            {displayError}
        </form>
    )
}

export default ReviewForm