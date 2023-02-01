import React from "react";
import Button from 'react-bootstrap/Button'

function DeleteReview({onDeleteReview, review}){

    

    return(
        <Button onClick={handleDelete} variant='secondary' size='sm'>
            Delete My Review
        </Button>
    )
}

export default DeleteReview