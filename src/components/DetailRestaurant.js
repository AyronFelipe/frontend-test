import React from 'react';
import StarRatings from 'react-star-ratings';
import "../styles/detail.css";

function DetailRestaurant() {

    return(
        <div className="restaurant-detail">
            <h1 className="page-title">Restaurant 3</h1>
            <div className="restaurant-detail-stars">
                <StarRatings
                    rating={4}
                    starDimension={'30px'}
                    starSpacing={'1px'}
                    starRatedColor={'#002B56'} />
            </div>
            <div className="restaurant-detail-meta">
                <div className="category">
                    <span>JAPANESE • $$$</span>
                </div>
                <div className="open">
                    <p className="open-text"><span className="dot">•</span>open now</p>
                </div>
            </div>
        </div>
    );
}

export default DetailRestaurant;