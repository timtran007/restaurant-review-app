import React, {useState} from "react";

function EditReviewForm({onEditReview}){
    const [buttonClick, setButtonClick] = useState(false)

    function handleButtonClick(){
        setButtonClick(!buttonClick)
    }


    return(
        <div>
            <button onClick={handleButtonClick}>
                Edit My Review
            </button>

            { buttonClick ? (<form>
                this form
            </form>) : ""}
        </div>
    )   
}

export default EditReviewForm