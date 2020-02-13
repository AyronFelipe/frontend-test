import React from 'react';
import '../styles/reviews.css';
import StarRatings from 'react-star-ratings';

function Reviews({ reviews }) {

    function formatDate(date) {
        const data = date.split(' ')[0]
        return new Date(data).toLocaleDateString();
    }

    return(
        <div className="reviews">
            {reviews.map((review) => 
                <div className="review" key={review.id}>
                    <div className="avatar">
                    {
                        review.user != undefined ?
                            <>
                                <div className="profile-pic">
                                    <img src={ review.user.image_url } alt="" width={80} height={80} />
                                </div>
                                <div className="profile-name">{ review.user.name }</div>
                                <div className="profile-date">{ formatDate(review.time_created) }</div>
                            </>
                            :
                            null
                    }
                    </div>
                    <div className="review-detail">
                        <div className="rating">
                            <StarRatings
                                rating={ review.rating }
                                starDimension={'20px'}
                                starSpacing={'1px'}
                                starRatedColor={'#002B56'} />
                        </div>
                        <div className="review-text">
                            <p>{ review.text }</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Reviews;