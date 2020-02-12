import React from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import '../styles/restaurants.css';

function Restaurants({ restaurants }) {

    return(
        <div className="restaurants">
            <h2 className="page-title">All Restaurants</h2>
            <div className="cards">
                { restaurants.map((restaurant) =>
                    <div className="card-restaurant" key={restaurant.id}>
                        <div className="card-restaurant-image">
                            <img src={restaurant.image_url} alt="Image restaurant" style={{ width: '304px', height: '228px' }} />
                        </div>
                        <div className="card-restaurant-detail">
                            <div className="card-restaurant-title">
                                { restaurant.name }
                            </div>
                            <div className="card-restaurant-stars">
                                <StarRatings
                                    rating={restaurant.rating}
                                    starDimension={'20px'}
                                    starSpacing={'1px'}
                                    starRatedColor={'#002B56'} />
                            </div>
                            <div className="card-restaurant-meta">
                                <div className="category">
                                <span>{ restaurant.categories[0].title } • { restaurant.price }</span>
                                </div>
                                <div className="open">
                                    { restaurant.is_closed ? <p className="open-text"><span className="dot">•</span> closed</p> : <p className="open-text"><span className="dot">•</span> open now</p> }
                                </div>
                            </div>
                            <div style={{ paddingTop: '10px' }} className="card-restaurant-button">
                                <Link to={`/detail/`}>
                                    <button type="button" className="btn-primary">
                                        learn more
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="load-more">
                <button className="btn-enabled">LOAD MORE</button>
            </div>
        </div>
    );
};

export default Restaurants;