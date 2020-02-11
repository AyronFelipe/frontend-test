import React from 'react';
import '../styles/dropdown.css';

function Select({ options, name, first, setButtonClass }) {

    return(
        <div className="dropdown">
            <span>{first}</span>
            <div className="dropdown-content">
                {options.map((option) =>
                    <div key={option.value} onClick={() => setButtonClass('btn-enabled')}>
                        <input type="radio" id={`radio-${option.value}`} name={name} />
                        <label htmlFor={`radio-${option.value}`}>{option.label}</label>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Select;