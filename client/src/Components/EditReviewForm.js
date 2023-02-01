import React, {useState} from "react";

function EditReviewForm({onEditReview, review}){
    const [errors, setErrors] = useState([])

    const currentFormData = {
        headline: `${review.headline}`,
        rating: `${review.rating}`,
        comment: `${review.comment}`
    }

    const [buttonClick, setButtonClick] = useState(false)
    const [updatedReview, setUpdatedReview] = useState(currentFormData)

    function handleButtonClick(){
        setButtonClick(!buttonClick)
    }

    function handleUpdate(e) {
        const key = e.target.name
        const value = e.target.value
        setUpdatedReview({
            ...updatedReview,
            [key]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedReview)
        })
        .then(resp => {
            if (resp.ok){
                resp.json().then( updatedReviewData => onEditReview(updatedReviewData))
                setButtonClick(!buttonClick)
            } else{
                resp.json().then( error => setErrors(error.errors))
            }
        })
        
    }
    const displayError = errors.map( e => {
        console.log(e)
        return(
            <p key={e} style={{color:"red"}}>{e}</p>
        )
    })

    return(
        <div>
            <button onClick={handleButtonClick}>
                Edit My Review
            </button>

            { buttonClick ? (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="headline">Headline: </label>
                    <input
                        onChange={handleUpdate}
                        type="text"
                        name="headline"
                        value={updatedReview.headline}
                    />
                </div>
                <div>
                    <label htmlFor="rating">Rating: </label>
                    <input
                        onChange={handleUpdate}
                        type="integer"
                        name="rating"
                        value={updatedReview.rating}
                    />
                </div>
                <div>
                    <label htmlFor="comment">Comment: </label>
                    <input
                        onChange={handleUpdate}
                        type="textarea"
                        name="comment"
                        value={updatedReview.comment}
                    />
                </div>
                <input type="submit" value="update my review"/>
                {displayError}
            </form>) : ""}
        </div>
    )   
}

export default EditReviewForm