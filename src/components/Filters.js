import React, { useState, useEffect } from 'react';
import Select from './Select';
import '../styles/style.css';


function Filters({ categories, filterOpen, filterPrice, filterCategory }) {

    const [prices, setPrices] = useState([
        {'alias': 'All', 'title': 'All'},
        {'alias': '$', 'title': '$'},
        {'alias': '$$', 'title': '$$'},
        {'alias': '$$$', 'title': '$$$'},
        {'alias': '$$$$', 'title': '$$$$'},
    ]);

    const [buttonClass, setButtonClass] = useState('btn-disabled');
    const [disabled, setDisabled] = useState(true);
    const [checked, setChecked] = useState(false);
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [clear, setClear] = useState(false);

    function changeButton() {
        setButtonClass('btn-enabled');
        setDisabled(false);
    }
    
    function resetInputs() {
        setButtonClass('btn-disabled');
        setDisabled(true);
        setChecked(false);
        setClear(true);
    }

    function def(e) {
        e.target.name == 'price' ? setPrice(e.target.value) : setCategory(e.target.value);
    }

    function handleChangeOpen() {
        setChecked(true);
        filterOpen();
    }

    useEffect(() => {
        if (price != undefined) {
            filterPrice(price);
        }
    }, [price])

    useEffect(() => {
        if (category != undefined) {
            filterCategory(category);
        }
    }, [category])

    return(
        <div className="filters">
            <span>Filter by:</span>
            <span className="filter">
                <input 
                    type="radio"
                    id="open-now"
                    className="open-now"
                    name="open_now"
                    onClick={() => changeButton()}
                    checked={checked}
                    onChange={() => handleChangeOpen()} />
                <label htmlFor="open-now">Open Now</label>
            </span>
            <span className="filter">
                <Select
                    options={prices}
                    name="price"
                    first="Price"
                    changeButton={changeButton}
                    def={def}
                    clear={clear}
                    setClear={setClear} />
            </span>
            <span className="filter">
                <Select
                    options={categories}
                    name="category"
                    first="Categories"
                    changeButton={changeButton}
                    def={def}
                    clear={clear}
                    setClear={setClear} />
            </span>
            <span className="filter clear-all">
                <button type="button" className={buttonClass} disabled={disabled} onClick={() => resetInputs()}>Clear All</button>
            </span>
        </div>
    );
}

export default Filters;