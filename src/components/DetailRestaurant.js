import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import "../styles/detail.css";
import api from "../utils/api";
import Reviews from './Reviews';

function DetailRestaurant() {

    const [restaurant, setRestaurant] = useState('');

    useEffect(() => {
        const url = window.location.href;
        const restaurantId = url.split(`/`)[4];
        async function loadRestaurant(){
            const obj = await api.get(`businesses/${restaurantId}`)
            setRestaurant(obj.data)
        }
        loadRestaurant();
    }, [])
    
    return(
        <div className="restaurant-detail">
            <h1 className="page-title">{ restaurant.name }</h1>
            <div className="restaurant-detail-stars">
                <StarRatings
                    rating={ restaurant.rating }
                    starDimension={'30px'}
                    starSpacing={'1px'}
                    starRatedColor={'#002B56'} />
            </div>
            <div className="restaurant-detail-meta">
                <div className="category">
                    <span>{ restaurant.categories != undefined ? restaurant.categories[0].title : `Carregando` } • { restaurant.price }</span>
                </div>
                <div className="open">
                    { restaurant.is_closed ? <p className="open-text"><span className="dot">•</span> closed</p> : <p className="open-text"><span className="dot">•</span> open now</p> }
                </div>
            </div>
            <div className="restaurant-detail-map-image">
                <div className="restaurant-detail-map">
                    {
                        restaurant.location != undefined ?
                        <iframe
                            frameBorder="0" style={{ border: '0', width: '100%', height: '100%' }}
                            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.API_GOOGLE_MAPS}&q=${restaurant.coordinates.latitude},${restaurant.coordinates.longitude}`} allowFullScreen>
                        </iframe>
                        :
                        <p>Load map</p>
                    }
                </div>
                <div className="restaurant-detail-image">
                    <img src={restaurant.image_url} alt="" style={{ width: '100%', height: '100%' }} />
                </div>
                { restaurant.location != undefined ? <p>{ restaurant.location.address1 } { restaurant.location.city }, { restaurant.location.state } { restaurant.location.zip_code }</p> : <p>Load location</p> }
            </div>
            <div className="restaurant-detail-reviews">
                <div className="reviews-number">{ restaurant.review_count } Reviews</div>
                <Reviews />
            </div>
        </div>
    );
}

export default DetailRestaurant;