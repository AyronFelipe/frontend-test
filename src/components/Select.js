import React, { useEffect } from 'react';
import '../styles/dropdown.css';

const Select = ({ options, name, first, changeButton, def, clear, setClear }) => {

    useEffect(() => {
        if (clear) {
            var elems = document.getElementsByClassName('radio');
            for (var i = 0; i < elems.length; i++) {
                elems[i].checked = false;
            }
        }
    }, [clear])

    function handleChange(e){
        def(e);
        setClear(false);
    }

    return(
        <div className="dropdown">
            <span>{first}</span>
            <div className="dropdown-content">
                {options.map((option) =>
                    <div key={option.value} onClick={(e) => changeButton(e)}>
                        <input 
                            type="radio"
                            id={`radio-${name}-${option.value}`}
                            name={name}
                            value={option.value}
                            className="radio"
                            onChange={(e) => handleChange(e)} />
                        <label htmlFor={`radio-${name}-${option.value}`}>
                            {option.label}
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Select;