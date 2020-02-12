import React, { useState } from 'react';
import Select from './Select';
import '../styles/style.css';


function Filters() {

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
                    onChange={() => setChecked(true)} />
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