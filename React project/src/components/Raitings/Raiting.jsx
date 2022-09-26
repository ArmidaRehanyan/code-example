import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const Ratings = () => {
    const [rating, setRating] = useState(0)

    const handleRating = (rate) => {
        setRating(rate)
    }

    return (
        <div>
            <Rating onClick={handleRating} ratingValue={rating} />
        </div>
    )
}

export default Ratings;