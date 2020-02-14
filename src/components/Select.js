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
                {
                    options != undefined ?
                        options.map((option) =>
                            <div key={option.alias} onClick={(e) => changeButton(e)} className="option">
                                <input 
                                    type="radio"
                                    id={`radio-${name}-${option.alias}`}
                                    name={name}
                                    value={option.alias}
                                    className="radio"
                                    onChange={(e) => handleChange(e)} />
                                <label htmlFor={`radio-${name}-${option.alias}`}>
                                    {option.title}
                                </label>
                            </div>
                        )
                    :
                    null
                }
            </div>
        </div>
    );
};

export default Select;