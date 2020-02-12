import React, { useState } from 'react';
import Select from './Select';
import '../styles/style.css';


function Filters({ categories }) {

    const [prices, setPrices] = useState([
        {'alias': 1, 'title': 'All'},
        {'alias': 2, 'title': '$'},
        {'alias': 3, 'title': '$$'},
        {'alias': 4, 'title': '$$$'},
        {'alias': 5, 'title': '$$$$'},
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