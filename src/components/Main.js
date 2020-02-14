import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import Filters from './Filters';
import Restaurants from './Restaurants';
import api from '../utils/api';
//import categories from '../utils/variables';


function Main(){

    const [categories, setCategories] = useState(categories);
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        async function loadCategories(){
            let listCategories = [];
            const obj = await api.get('categories')
            obj.data.categories.map((cat) => {
                cat.parent_aliases.map((parent_alias) => {
                    if (parent_alias === 'restaurants') {
                        listCategories.push(cat)
                    }
                })
            })
            setCategories(listCategories);
        }
        loadCategories();
    }, [])

    useEffect(() => {
        async function loadRestaurants() {
            const obj = await api.get('businesses/search?location=lasvegas');
            setRestaurants(obj.data.businesses);
        }
        loadRestaurants();
    }, [])

    function filterOpen() {
        let filter = restaurants.filter((restaurant) => {
            return restaurant.is_closed === false
        });
        setRestaurants(filter);
    }

    function filterPrice(price) {
        let filter = restaurants.filter((restaurant) => {
            return restaurant.price === price
        });
        setRestaurants(filter);
    }

    function filterCategory(categoryFilter) {
        let filter = []
        restaurants.filter((restaurant) => {
            restaurant.categories.map((category) => {
                let isEqual = category.alias === categoryFilter
                if (isEqual) {
                    filter.push(restaurant)
                }
            })
        });
        setRestaurants(filter);
    }

    async function clearAll() {
        const obj = await api.get('businesses/search?location=lasvegas');
        setRestaurants(obj.data.businesses);
    }

    return(
        <>
            <div className="page-information">
                <h1 className="page-title">Restaurants</h1>
                <p className="page-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="divider"></div>
                <Filters categories={categories} filterOpen={filterOpen} filterPrice={filterPrice} filterCategory={filterCategory} clearAll={clearAll} />
                <div className="divider"></div>
                <Restaurants restaurants={restaurants} />
            </div>
        </>
    );
}

export default Main;