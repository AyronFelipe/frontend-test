import React from 'react';
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
                        <div style={{ paddingTop: '10px' }}>
                            <button type="button" className="btn-primary">
                                learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Restaurants;