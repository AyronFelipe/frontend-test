import React, { useLayoutEffect } from 'react'


function Select({ options }) {

    return(
        <ul style={{ listStyle: 'none' }}>
            {options.map((option) => 
                <li key={option.value}>
                    <input type="radio" id={`radio-${option.value}`} />
                    <label htmlFor={`radio-${option.value}`}>{option.label}</label>
                </li>
            )}
        </ul>
    )
}

export default Select;