import React from 'react';
import StarRatings from 'react-star-ratings';

function DetailRestaurant() {

    return(
        <>
            <h1 className="page-title">Restaurant 3</h1>
            <StarRatings
                rating={4}
                starDimension={'20px'}
                starSpacing={'1px'}
                starRatedColor={'#002B56'} />
        </>
    );
}

export default DetailRestaurant;