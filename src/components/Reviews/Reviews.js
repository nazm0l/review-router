import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div className='grid md:grid-cols-3 gap-4 mt-10 px-10'>
            {
                reviews.map(review => <Review key={review._id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;