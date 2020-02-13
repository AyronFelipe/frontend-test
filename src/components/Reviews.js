import React from 'react';
import '../styles/reviews.css';
import StarRatings from 'react-star-ratings';

function Reviews({ reviews }) {

    return(
        <div className="reviews">
            {reviews.map((review) => 
                <div className="review" key={review.id}>
                    {
                        review.user != undefined ?
                        <div className="avatar">
                            <div className="profile-pic">
                                <img src={ review.user.image_url } alt=""/>
                            </div>
                            <div className="profile-name">{ review.user.name }</div>
                            <div className="profile-date">{ review.time_created }</div>
                        </div>
                        :
                        null
                    }
                    <div className="rating">
                        <StarRatings
                            rating={ review.rating }
                            starDimension={'20px'}
                            starSpacing={'1px'}
                            starRatedColor={'#002B56'} />
                    </div>
                    <div className="review">
                        <p>{ review.text }</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Reviews;