import React, { useState } from 'react';
import '../styles/style.css';
import Select from './Select';

function Main(){

    const [prices, setPrices] = useState([
        {'value': 1, 'label': 'All'},
        {'value': 2, 'label': '$'},
        {'value': 3, 'label': '$$'},
        {'value': 4, 'label': '$$$'},
        {'value': 5, 'label': '$$$$'},
    ]);

    const [categories, setCategories] = useState([
        {'value': 1, 'label': 'All'},
        {'value': 2, 'label': 'Italian'},
        {'value': 3, 'label': 'Seafood'},
        {'value': 4, 'label': 'Steakhouses'},
        {'value': 5, 'label': 'Japanese'},
        {'value': 6, 'label': 'American'},
        {'value': 7, 'label': 'Mexican'},
        {'value': 8, 'label': 'Thai'},
    ])

    return(
        <>
            <div className="page-information">
                <h1 className="page-title">Restaurants</h1>
                <p className="page-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="divider"></div>
                <div className="filters">
                    <span>Filter by:</span>
                    <span className="filter">
                        <input type="radio" id="open-now" className="open-now" name="open_now" />
                        <label htmlFor="open-now">Open Now</label>
                    </span>
                    <span className="filter">
                        <Select options={prices} />
                    </span>
                    <span className="filter">
                        <Select options={categories} />
                    </span>
                    <span className="filter clear-all">
                        <button type="button" className="btn-disabled">Clear All</button>
                    </span>
                </div>
                <div className="divider"></div>
            </div>
        </>
    );
}

export default Main;