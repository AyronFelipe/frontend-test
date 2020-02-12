import React from 'react';
import StarRatings from 'react-star-ratings';
import '../styles/style.css';
import '../styles/restaurants.css';

function Restaurants() {

    return(
        <div className="restaurants">
            <h2 className="page-title">All Restaurants</h2>
            <div className="cards">
                <div className="card-restaurant">
                    <div className="card-restaurant-image">
                        <img src="//via.placeholder.com/304x228" alt="Image restaurant" style={{ width: '304px', height: '228px' }} />
                    </div>
                    <div className="card-restaurant-detail">
                        <div className="card-restaurant-title">
                            Very Long Name Restaurants Number 1 In List
                        </div>
                        <div className="card-restaurant-stars">
                            <StarRatings
                                rating={4}
                                starDimension={'20px'}
                                starSpacing={'1px'}
                                starRatedColor={'#002B56'} />
                        </div>
                        <div className="card-restaurant-meta">
                            <div className="category">
                                <span>THAI • $$$$</span>
                            </div>
                            <div className="open">
                                <p className="open-text"><span className="dot">•</span> open now</p>
                            </div>
                        </div>
                        <div style={{ paddingTop: '10px' }} className="card-restaurant-button">
                            <button type="button" className="btn-primary">
                                learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="load-more">
                <button className="btn-enabled">LOAD MORE</button>
            </div>
        </div>
    );
};

export default Restaurants;