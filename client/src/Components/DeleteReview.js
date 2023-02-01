import React from "react";
import Button from 'react-bootstrap/Button'

function DeleteReview({onDeleteReview, review}){

    function handleDelete(){
        fetch(`/reviews/${review.id}`, {
            method: "DELETE"
        })
        .then(resp => {
            if (resp.ok){
                resp.json().then( deleted => onDeleteReview(deleted))
            }
        })
    }

    return(
        <Button onClick={handleDelete} variant='secondary' size='sm'>
            Delete My Review
        </Button>
    )
}

export default DeleteReview