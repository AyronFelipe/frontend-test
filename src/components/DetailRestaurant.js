import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import "../styles/detail.css";
import api from "../utils/api";

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
        </div>
    );
}

export default DetailRestaurant;